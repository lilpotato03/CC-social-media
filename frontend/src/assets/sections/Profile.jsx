import React, { useEffect, useState } from 'react'
import ProfileIcon from '../components/ProfileIcon'
import axios from 'axios'

function Profile(props) {

  const [userData,setUserData]=useState({})
  const [userPostData,setUserPostData]=useState([])
  useEffect(()=>{
    const getData=async ()=>{
      const result=await axios.post('/api/getUser',{username:props.user},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      const posts=await axios.post('/api/getUserPosts',{username:props.user},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      setUserPostData(posts.data)
      setUserData(result.data[0])
    }
    getData()
  },[userData])
  return (
    <div className="md:ml-[10rem] h-full flex flex-col items-center">
      <div className=" flex justify-center w-full h-[10rem] gap-x-5 items-center px-1">
        <ProfileIcon size='xxl'/>
        <div className="top-profile h-full min-w-[20rem] py-2 gap-y-2 flex flex-col w-[50%] max-w-[30rem] justify-center">
          <div className="flex gap-x-5">
          <h1 className="font-bold text-[25px]">{userData.Username}</h1>
          
          {props.type==='user'?<button className="bg-neutral-600 px-2 py-1 rounded-lg">Edit profile</button>:<button className="bg-blue-600 px-2 py-1 rounded-lg">Follow</button>}
          </div>
          <div className="w-full h-10 flex gap-x-4 font-semibold  text-[18px]">
            <div>{userData.Posts?userData.Posts.length-1:'NaN'} posts</div>
            <div>{userData.Followers?userData.Followers.length-1:'NaN'} followers</div>
            <div>{userData.Following?userData.Following.length-1:'NaN'} following</div>
          </div>

        </div>
    
      </div>
      <div className="m-1 profile-grid  min-w-[25rem] w-[25rem] md:w-full max-w-[40rem]  flex gap-x-5 flex-wrap py-2  gap-y-2 overflow-scroll h-full md:px-10 px-3  pb-20">
        {userPostData?userPostData.map((e)=>{
          return(
            <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400" key={e.PostId}>
              <img src={e.Image} alt="" className='h-full w-full'/>
            </div>
          )
        }):<></>}
      </div>
      </div>
  )
}

export default Profile