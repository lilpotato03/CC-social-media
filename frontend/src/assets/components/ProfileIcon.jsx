import React from 'react'

function ProfileIcon(props) {
  if(props.size==='lg')
  return (
    <div className='pfp_lg flex justify-center items-center flex-shrink-0 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full p-[2px]'>
        <img src="../../public/assets/default_profile.jpg" alt="profilepic" className='rounded-full w-full border-black border-[3px]' />
    </div>
  )
  else if(props.size==='xs')return(
    <div className='size-[1.5rem] flex justify-center items-center flex-shrink-0 rounded-full '>
        <img src="../../public/assets/default_profile.jpg" alt="profilepic" className='rounded-full w-full' />
    </div>
  )
  else return(
    <div className='size-10 flex justify-center items-center flex-shrink-0 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full p-[2px]'>
        <img src="../../public/assets/default_profile.jpg" alt="profilepic" className='rounded-full w-full border-black border-[3px]' />
    </div>
  )
}

export default ProfileIcon