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
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
})


app.use(bodyParser.urlencoded({extended:true}))

const db=new AWS.DynamoDB.DocumentClient()

const ddb=new AWS.DynamoDB()

const s3=new AWS.S3()

const myBucket=process.env.S3_BUCKET_NAME

const date=new Date()


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
function crSessionTable(){
    const params={
        AttributeDefinitions:[
            {
                AttributeName:'SessionId',
                AttributeType:'S'
            }
        ],
        KeySchema:[
            {
                AttributeName:'SessionId',
                KeyType:'HASH'
            }
        ],
        TableName:'Sessions',
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
async function addSession(username,res){
    const sessionId=await crypto.randomUUID()
    const cDate=new Date()
    cDate.setTime(cDate.getTime()+(24 * 60 * 60 * 1000))
    const expires = cDate.toUTCString()
        const params={
            TableName:'Sessions',
            Item:{
                SessionId:sessionId,
                Username:username,
                LoggedIn:(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'-'+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()),
                LoggedOut:"Not logged out",
                Active:true
            }
        }
        await db.put(params).promise()
        res.set('Set-cookie',`session=${sessionId};expires=${expires};`)
}

async function getAuth(req,res){
    if(req.headers.cookie){
        const sessionId=req.headers.cookie?.split('=')[1]
        const params={
            TableName:'Sessions',
            Key:{SessionId:sessionId}
        }
        const {Item}=await db.get(params).promise()
        if(!Item){
            res.status(400)
            res.send('Not Authorized')
        }
    }
    else{
        res.status(400)
        res.send('Not Authorized')   
 }
}

// crSessionTable()

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
    try{
        const params={
            TableName:'Accounts'
        }
        await getAuth(req,res)
        const {Items=[]}=await db.scan(params).promise()
        console.log(req.headers.cookie?.split('=')[1])
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
        await addSession(req.body.username,res)
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
            await addSession(data.username,res)
            res.send(true)
        }  
        else {
            res.send(false)

        }
    }catch(error){
        res.status(400)
        res.send('Incorrect Username or password')
        console.log(error)
    }
})
app.get('/auth',async(req,res)=>{
    try{
        if(req.headers.cookie){
            const sessionId=req.headers.cookie?.split('=')[1]
        const params={
            TableName:'Sessions',
            Key:{SessionId:sessionId}
        }
        const {Item}=await db.get(params).promise()
        if(Item){
            res.status(200)
            res.send(Item.Username)
        }
        else{
            res.status(400)
            res.send('Not authorised')
        }
        }
        else{
            res.status(400)
            res.send('Not authorised')
        }
    }catch(error){
        console.log(error)
        res.status(400)
        res.send('Not authorised')
    }
})
app.get('/logout',async (req,res)=>{
    try{
        const sessionId=req.headers.cookie?.split('=')[1]
        if(sessionId){
        await db.update({
            TableName:'Sessions',
            Key:{SessionId:sessionId},
            UpdateExpression:'SET Active= :active , LoggedOut= :logged',
            ExpressionAttributeValues:{':active':false,':logged':(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'-'+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear())}
        }).promise()
        res.set('Set-Cookie','session=; expires=Thu, 01-Jan-70 00:00:01 GMT;')
        res.send('loggedOut')
        }
        else{
            res.send('no cookie')
        }
    }catch(error){
        console.log(error)
        res.send(400)
    }
})
app.post('/addPost',upload.single('upload'),async(req,res)=>{
    try{
        await getAuth(req,res)
        const postId=crypto.randomUUID()
        const params={
            TableName:'Posts',
            Item:{
                PostId:postId,
                Username:req.body.username,
                Caption:req.body.caption,
                Image:req.file.location,
                Comments:[],
                Time:(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'-'+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()),
                TimeStamp:date.getTime()
            }
        }
        await db.put(params).promise()
        await db.update({
            TableName:'Accounts',
            Key:{Username:req.body.username},
            UpdateExpression:'SET Posts = list_append(Posts, :post)',
            ExpressionAttributeValues:{':post':[postId]}
        }).promise()
        res.redirect('https://connectify-psi.vercel.app/')
    }catch(error){
        console.log(error.message)
    }
})
app.get('/getAllPosts',async(req,res)=>{

    try{
        const params={
            TableName:'Posts'
        }
        await getAuth(req,res)
        const {Items=[]}=await db.scan(params).promise()
        const data=await Items.sort((a,b)=>{return a.TimeStamp-b.TimeStamp})
        res.send(data.reverse())
    }catch(error){
        res.send('some issue')
    }
})
app.post('/getUserPosts',async(req,res)=>{

    try{
        const params={
            TableName:'Posts',
            FilterExpression:'Username= :user',
            ExpressionAttributeValues:{':user':req.body.username}
        }
        await getAuth(req,res)
        const {Items=[]}=await db.scan(params).promise()
        const data=await Items.sort((a,b)=>{return a.TimeStamp-b.TimeStamp})
        res.send(data.reverse())
    }catch(error){
        res.send(error.message)
    }
})
app.post('/getFollowingPosts',async (req,res)=>{
    
    try{
        const users=await req.body.users
    var userObject = {};
    var index = 0;
    await users.forEach(function(user) {
        index++;
        var userKey = ":user"+index;
        userObject[userKey.toString()] = user;
    });
    const params={
        TableName:'Posts',
        FilterExpression:"Username IN ("+Object.keys(userObject).toString()+ ")",
        ExpressionAttributeValues:userObject
    }
        await getAuth(req,res)
        const {Items=[]}=await db.scan(params).promise()
        const data=await Items.sort((a,b)=>{return a.TimeStamp-b.TimeStamp})
        console.log(req.body.users)
        res.send(data.reverse())
    }catch(error){
        res.send(error)
    }
})
app.post('/searchUsers',async(req,res)=>{

    try{
        const params={
            TableName:'Accounts',
            FilterExpression:'contains(Username, :user)',
            ExpressionAttributeValues:{
                ':user':req.body.searchTxt
            }
        }
        await getAuth(req,res)
        const {Items=[]}=await db.scan(params).promise()
        res.send(Items)
    }catch(err){
        console.log(err)
    }

})
app.post('/getUser',async(req,res)=>{

    try{
        const params={
            TableName:'Accounts',
            KeyConditionExpression:'Username= :user',
            ExpressionAttributeValues:{
                ':user':req.body.username
            },
            ProjectionExpression:'Username,Followers,Following,Posts'
        }
        await getAuth(req,res)
        const result=await db.query(params).promise()
        res.send(result.Items)
    }catch(err){
        res.send(err.message)
    }
})
app.post('/sendFollow',async(req,res)=>{

    try{
        const params={
            TableName:'Accounts',
            KeyConditionExpression:'Username= :user',
            ExpressionAttributeValues:{
                ':user':req.body.follower
            },
            ProjectionExpression:'Username,Followers,Following,Posts'
        }
        const params2={
            TableName:'Accounts',
            KeyConditionExpression:'Username= :user',
            ExpressionAttributeValues:{
                ':user':req.body.toFollow
            },
            ProjectionExpression:'Username,Followers,Following,Posts'
        }
        await getAuth(req,res)
        const follower=await db.query(params).promise()
        const toFollow=await db.query(params2).promise()
        const followerList=(follower.Items[0].Following)
        const toFollowList=(toFollow.Items[0].Followers)
            if(followerList.includes(toFollow.Items[0].Username)){  
                console.log('exists')
                const fl_index=String(followerList.indexOf(toFollow.Items[0].Username))
                const tf_index=String(toFollowList.indexOf(follower.Items[0].Username))
                console.log(fl_index,tf_index)
                await db.update({
                    TableName:'Accounts',
                    Key:{Username:follower.Items[0].Username},
                    UpdateExpression:'REMOVE Following['+fl_index+']'
                }).promise()
                await db.update({
                    TableName:'Accounts',
                    Key:{Username:toFollow.Items[0].Username},
                    UpdateExpression:'REMOVE Followers['+tf_index+']',  
                }).promise()
            }else{
                console.log('added')
                await db.update({
                    TableName:'Accounts',
                    Key:{Username:follower.Items[0].Username},
                    UpdateExpression:'SET Following = list_append(Following, :user)',
                    ExpressionAttributeValues:{':user':[toFollow.Items[0].Username]}
                }).promise()
                await db.update({
                    TableName:'Accounts',
                    Key:{Username:toFollow.Items[0].Username},
                    UpdateExpression:'SET Followers = list_append(Followers, :user)',
                    ExpressionAttributeValues:{':user':[follower.Items[0].Username]}
                }).promise()
            }
    }catch(err){
        console.log(err)
    }
})
// console.log(crypto.randomUUID())