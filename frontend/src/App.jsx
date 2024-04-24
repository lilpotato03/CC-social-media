import { useContext, useEffect, useState } from "react"
import Modal from "./assets/components/Modal"
import Navbar from "./assets/sections/Navbar"
import PostSections from "./assets/sections/PostSections"
import { Context } from "./context/AppContext"
import Login from "./assets/sections/Login"
import axios from 'axios'

import Profile from "./assets/sections/Profile"
import Home from "./assets/sections/Home"
function App() {

  const data={
    Username:'aaronfur_',
    Image:'https://picsum.photos/200',
    Caption:'This is a post'
  }
  const {modalState,loggedIn,currentView,setCurrentView,currentUser,profileData}=useContext(Context)
  const [postData,setPostData]=useState([])
  const [genPosts,setGenPosts]=useState(false)
  function genPost(){
    return(
      
        postData.map((post)=>{
          return(
            <PostSections data={post} key={post.PostId} id={post.PostId}/>
          )
        })
    )
  }
  useEffect(()=>{
    const getData=async()=>{
      const user=await axios.post('/api/getUser',{username:currentUser},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      const following=await user.data[0].Following
      const result=await axios.post('/api/getFollowingPosts',{users:following},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      setPostData(result.data)
    }
    getData()
    setGenPosts(true)
  },[loggedIn])

  if(loggedIn){
  return (
    <div className="bg-neutral-900 w-[100vw] h-[100vh]  text-white  md:pt-0">
      <Navbar />

      {/* <Home genPost={genPost} genPosts={genPosts}/> */}
   {currentView==='home'?<Home genPost={genPost} genPosts={genPosts}/>:<></>}
   {currentView==='profile'?<Profile type={profileData[0]} user={profileData[1]} />:<></>}
      {modalState?<Modal />:<></>}
    </div>
  )
}
else{
  return(<Login />)
}
}

export default App
