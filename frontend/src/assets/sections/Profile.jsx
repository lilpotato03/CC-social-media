import React from 'react'
import ProfileIcon from '../components/ProfileIcon'

function Profile() {
  return (
    <div className="md:ml-[10rem] h-full flex flex-col items-center">
      <div className=" flex justify-center w-full h-[10rem] gap-x-5 items-center px-1">
        <ProfileIcon size='xxl'/>
        <div className="top-profile h-full min-w-[20rem] py-2 gap-y-2 flex flex-col w-[50%] max-w-[30rem] justify-center">
          <div className="flex gap-x-5">
          <h1 className="font-bold text-[25px]">aaronfur_</h1>
          <button className="bg-neutral-600 px-2 py-1 rounded-lg">Edit profile</button>
          </div>
          <div className="w-full h-10 flex gap-x-4 font-semibold  text-[18px]">
            <div>0 posts</div>
            <div>296 followers</div>
            <div>419 following</div>
          </div>
          <h2 className="text-[15px]">Aaron Furtado</h2>

        </div>
    
      </div>
      <div className="m-1 profile-grid  min-w-[25rem] w-[25rem] md:w-full max-w-[40rem]  flex gap-x-5 flex-wrap py-2  gap-y-2 overflow-scroll h-full md:px-10 px-3 justify-center pb-20">
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
        <div className=" flex-shrink-0 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-blue-400"></div>
      </div>
      </div>
  )
}

export default Profile