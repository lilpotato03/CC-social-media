import React, { useContext, useState } from 'react'
import { Context } from '../../context/AppContext'
import axios from 'axios'

function Login() {

    const [toggleSignUp,setToggleSignUp]=useState(true)
    const {setLoggedIn,currentUser,setCurrentUser}=useContext(Context)
    const [un,sUn]=useState('')
    const [em,sEm]=useState('')
    const [pw,sPw]=useState('')

    function clearInputs(){
        sUn('')
        sEm('')
        sPw('')
    }
    async function verifyUser(){
        const result=await axios.post('/api/verifyUser',{'username':un,'password':pw},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }})
        if(result.data==true){
            await setLoggedIn(true)
            await setCurrentUser(un)
            await window.location('http://localhost:5173/')
        }
        else{
            console.log(result)
        }
    }
    async function addUser(){
    const result=await axios.post('/api/addUser',{Username:un,Password:pw,Email:em,Followers:[''],Following:[''],Posts:['']},{headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
      await console.log(result.data)
        if(result.data==='OK'){
            setToggleSignUp(!toggleSignUp)
        }
        else{
            console.log(result)
        }
    }
  return (
    <div className="bg-neutral-900 w-[100vw] h-[100vh] flex justify-center items-center text-white  md:pt-0">
        <div className='bg-neutral-800 min-w-[20rem] h-[80%] rounded-md flex flex-col p-4 '>
            {toggleSignUp?
            <form  method='POST' className='w-full h-full flex flex-col gap-y-2 items' onSubmit={(e)=>{
                e.preventDefault()
                verifyUser()
            }}>
                <h1 className='font-bold text-[30px] mb-4'>Login</h1>
                <label htmlFor="username" className='label'>Username</label>
                <input type="text" name="username" className='input' id="username" placeholder='Username' value={un} onChange={(e)=>sUn(e.target.value)}/>
                <label htmlFor="password" className='label'>Password</label>
                <input type="text" name="password" className='input' id="password" placeholder='Password' value={pw} onChange={(e)=>sPw(e.target.value)}/>
                <button type='submit' className='bg-blue-400 font-bold min-w-[5rem] w-[5rem] p-1 text-center rounded-md mt-4'>Login</button>
                <p  className='text-[13px] underline mt-10 cursor-pointer hover:text-blue-300' onClick={()=>{
                    setToggleSignUp(!toggleSignUp)
                    clearInputs()
                }}>Dont have an Account? Sign Up</p>
            </form>
            :
            <form  method='POST' className='w-full h-full flex flex-col gap-y-2 items' onSubmit={(e)=>{
                e.preventDefault()
                addUser()
            }}>
                <h1 className='font-bold text-[30px] mb-4'>Sign Up</h1>
                <label htmlFor="email" className='label'>Email</label>
                <input type="text" name="email" className='input' id="email" placeholder='Email' value={em} onChange={(e)=>sEm(e.target.value)}/>
                <label htmlFor="username" className='label'>Username</label>
                <input type="text" name="username" className='input' id="username" placeholder='Username' value={un} onChange={(e)=>sUn(e.target.value)}/>
                <label htmlFor="password" className='label'>Password</label>
                <input type="text" name="password" className='input' id="password" placeholder='Password' value={pw} onChange={(e)=>sPw(e.target.value)}/>
                <button type='submit' className='bg-blue-400 font-bold min-w-[5rem] w-[5rem] p-1 text-center rounded-md mt-4'>Sign Up</button>
                <p  className='text-[13px] underline mt-5 cursor-pointer hover:text-blue-300' onClick={()=>{
                    setToggleSignUp(!toggleSignUp)
                    clearInputs()
                    }}>Go back to Login</p>
            </form>}
        </div>
    </div>
  )
}

export default Login