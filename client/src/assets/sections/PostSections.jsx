import React from 'react'
import ProfileIcon from '../components/ProfileIcon'
import { useContext } from 'react'
import { Context } from '../../context/AppContext'
import PostModal from '../components/PostModal'
function PostSections(props) {
  function genPostModal(data){
    setModalState(!modalState)
    setModalContent(()=>{
      return(
        <PostModal data={data}/>
      )
    })
  }

  const {modalState,setModalState,setModalContent}=useContext(Context)
  return (
    <div className=' max-w-[21rem]  min-h-[35rem] max-h-[45rem] w-[21rem] min-w-[10rem] flex flex-col rounded-md p-1 border-[1px] border-neutral-200'>
      <div className=' w-full min-h-[3rem] postHeader flex items-center px-2 gap-x-2 '>
        <ProfileIcon />
        <h1 className='font-bold'>{props.data.Username}</h1>
      </div>
      <div className=' border-neutral-400  w-full min-h-[20rem] min-w-[20rem] postContent'>
        <img src={props.data.Image} class='h-full w-full max-w-[25rem] max-h-[25rem] 'alt="" />
      </div>
      <div className=' w-full min-h-[3rem] postControls flex flex-col p-1 gap-y-1 mt-5'>
      <div className='controlIcons px-2 flex gap-x-3 relative'>
        <div className="size-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <     path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        </div>  
        <div className="size-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </svg>
        </div>  
        <div className="size-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
        </svg>
        </div> 
        <div className="size-5 absolute right-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
        </div>   
      </div>
      <div className="postLikes flex p-1 px-2">
        <div className='like-icons flex relative'>
          <div className='absolute left-0'>
          <ProfileIcon size='xs' />
          </div>
          <div className='absolute left-2'>
          <ProfileIcon size='xs' />
          </div>
          <div className='absolute left-4'>
          <ProfileIcon size='xs' />
          </div>
        </div>
        <p className='text-[13px] ml-[40px] mt-[1px]'>125 likes</p>
      </div>
      </div>
      <div className=' w-full min-h-[2rem] postCaption p-2'>
      <p className='text-[13px]  mt-[1px]'>{props.data.Caption}</p>
      </div>
      <div className=' w-full min-h-[2rem] border-neutral-400 border-b-1 postComents p-2 flex flex-col gap-y-2 text-[10px]'>
        <p className='cursor-pointer' onClick={()=>genPostModal(props.data)}>View 23 Comments</p>
        <p className='cursor-pointer' onClick={()=>genPostModal(props.data)}>Add comment...</p>
      </div>
    </div>
  )
}

export default PostSections