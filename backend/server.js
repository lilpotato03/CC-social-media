import axios from 'axios'
import express from 'express'
import bodyParser from 'body-parser'
import AWS from 'aws-sdk'
import 'dotenv/config'
import multer from 'multer'
import multerS3 from 'multer-s3'
//declarations

const app=express()

AWS.config.update({
    region:'ap-south-1',
    accessKeyId:process.env.AWS_ACCESS_KEY,
    secretAccessKey:process.env.SECRET_AWS_ACCESS_KEY
})


app.use(bodyParser.urlencoded({extended:true}))

const db=new AWS.DynamoDB.DocumentClient()

const ddb=new AWS.DynamoDB()

const s3=new AWS.S3()

const myBucket=process.env.S3_BUCKET_NAME


const storage=multerS3({
    s3:s3,
    bucket:myBucket,
    contentType:multerS3.AUTO_CONTENT_TYPE,
    key:(req,file,cb)=>{
        cb(null,crypto.randomUUID()+file.originalname)
    }
})

const upload=multer({storage:storage})

//fucntions to create the tables
function crAccountTable(){
    const params={
        AttributeDefinitions:[
            {
                AttributeName:'Username',
                AttributeType:'S'
            }
        ],
        KeySchema:[
            {
                AttributeName:'Username',
                KeyType:'HASH'
            }
        ],
        TableName:'Accounts',
        BillingMode:'PROVISIONED',
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10,
        }
    }
    ddb.createTable(params,(err, data)=>{
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Table Created", data);
        }
      })

}
function crPostTable(){
    const params={
        AttributeDefinitions:[
            {
                AttributeName:'PostId',
                AttributeType:'S'
            }
        ],
        KeySchema:[
            {
                AttributeName:'PostId',
                KeyType:'HASH'
            }
        ],
        TableName:'Posts',
        BillingMode:'PROVISIONED',
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10,
        }
    }
    ddb.createTable(params,(err, data)=>{
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Table Created", data);
        }
      })

}

// crAccountTable()

//paths

app.listen(process.env.PORT,(req,res)=>{
    try{
        console.log(`Server started on PORT:${process.env.PORT}`)
    }catch(error){
        console.log(error.message)
    }
})
app.get('/',(req,res)=>{
    try{
        res.send('You hit the server')
    }catch(error){
        console.log(error.message)
    }
})
app.get('/readAllUsers',async (req,res)=>{
    const params={
        TableName:'Accounts'
    }
    try{
        const {Items=[]}=await db.scan(params).promise()
        console.log('Request came through')
        res.send(Items)
    }catch(error){
        res.send('some issue')
    }
})
app.post('/addUser',async(req,res)=>{
    try{        
        const params=await {
            TableName:'Accounts',
            Item:req.body
        }
        console.log(params)
        await db.put(params).promise()
        res.send(200)
    }catch(error){
        res.send(400)
    }
})
app.post('/verifyUser',async(req,res)=>{
    try{
        const data=await req.body
        await console.log(data)
        const params={
            TableName:'Accounts',
            Key:{
                Username:String(data.username)
            }
        }
        const {Item}=await db.get(params).promise()
        if(Item.Password===data.password){
            res.send('valid')
            console.log('valid login')
            console.log(data)
        }  
        else {
            res.send('invalid')
            console.log('invalid')
            console.log(data)
        }
    }catch(error){
        res.send('Incorrect Username or password')
        console.log(error.message   )
    }
})

app.post('/addPost',upload.single('upload'),async(req,res)=>{
    try{
        const date=new Date()
        const params={
            TableName:'Posts',
            Item:{
                PostId:crypto.randomUUID(),
                Username:req.body.username,
                Caption:req.body.caption,
                Image:req.file.location,
                Comments:[],
                Time:(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'-'+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear())
            }
        }
        await db.put(params).promise()
        console.log(params)
        res.redirect('http://localhost:5173/')
    }catch(error){
        console.log(error.message)
    }
})
app.get('/getAllPosts',async(req,res)=>{
    const params={
        TableName:'Posts'
    }
    try{
        const {Items=[]}=await db.scan(params).promise()
        res.send(Items)
    }catch(error){
        res.send('some issue')
    }
})


// console.log(crypto.randomUUID())