import React from 'react'
import StoryReel from './StoryReel'

function Home(props) {
  return (
    <div className=" min-w-[28rem] lg:w-[50%] h-full items-center flex flex-col relative p-5 gap-y-5 overflow-y-scroll lg:ml-[12rem] no-scrollbar ">
        <StoryReel /> 
        <div className="gap-y-10 w-[25rem]  items-center flex-col flex mb-[5rem]">
          {props.genPosts?props.genPost():<></>}
        </div>
      </div>
  )
}

export default Home