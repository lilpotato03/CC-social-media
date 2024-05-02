import React, { useEffect, useState,useContext} from 'react'
import ProfileIcon from '../components/ProfileIcon'
import axios from 'axios'
import { Context } from '../../context/AppContext'
import PostModal from '../components/PostModal'
function Profile(props) {

  const [userData,setUserData]=useState({})
  const [userPostData,setUserPostData]=useState([])
  const {currentUser}=useContext(Context)
  const [sFol,setSFol]=useState(false)
  const [folStatus,setFolStatus]=useState(null)
  function genPostModal(data){
    setModalState(!modalState)
    setModalContent(()=>{
      return(
        <PostModal data={data}/>
      )
    })
  }
  const {modalState,setModalState,setModalContent}=useContext(Context)
  useEffect(()=>{
    const getData=async ()=>{
      const result=await axios.post('/api/getUser',{username:props.user},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      const posts=await axios.post('/api/getUserPosts',{username:props.user},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      if(result.data[0].Followers.includes(currentUser)){
        setFolStatus(true)
      }
      else{
        setFolStatus(false)
      }
      setUserPostData(posts.data)
      setUserData(result.data[0])
    }
    getData()
  },[userData,folStatus])

  useEffect(()=>{
    const sendReq=async ()=>{
      const result=await axios.post('/api/sendFollow',{follower:currentUser,toFollow:props.user},{headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    }
    if(sFol){
      sendReq()
      setSFol(false)
    }
  },[sFol])
  return (
    <div className="md:ml-[10rem] h-full flex flex-col items-center">
      <div className=" flex justify-center w-full h-[10rem] gap-x-5 items-center px-1">
        <ProfileIcon size='xxl'/>
        <div className="top-profile h-full min-w-[17rem] py-2 gap-y-2 flex flex-col w-[50%] max-w-[30rem] justify-center">
          <div className="flex gap-x-5">
          <h1 className="font-bold text-[25px]">{userData.Username}</h1>
          
          {props.type==='user'?<button className="bg-neutral-600 px-2 py-1 rounded-lg">Edit profile</button>:folStatus?
          <button className="bg-neutral-600 px-2 py-1 rounded-lg" onClick={()=>{setSFol(true)}}>Following</button>:
          <button className="bg-blue-600 px-2 py-1 rounded-lg" onClick={()=>{setSFol(true)}}>Follow</button>}
          </div>
          <div className="w-full h-10 flex gap-x-4 font-semibold  text-[18px]">
            <div>{userData.Posts?userData.Posts.length-1:'NaN'} posts</div>
            <div>{userData.Followers?userData.Followers.length-1:'NaN'} followers</div>
            <div>{userData.Following?userData.Following.length-1:'NaN'} following</div>
          </div>

        </div>
    
      </div>
      <div className="m-1 profile-grid  min-w-[21rem] w-[21rem] md:w-full max-w-[40rem]  flex gap-x-5 flex-wrap py-2  gap-y-2 overflow-scroll h-full md:px-10 px-3  pb-20">
        {userPostData?userPostData.map((e)=>{
          return(
            <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[5rem] h-[5rem] bg-neutral-800" key={e.PostId}>
              <img src={e.Image} alt="" className='h-full w-full' onClick={()=>{genPostModal(e)}}/> 
            </div>
          )
        }):<></>}
      </div>
      </div>
  )
}

export default Profile