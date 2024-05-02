import React from 'react'
import { Context } from '../../context/AppContext'
import { useContext } from 'react'
import ProfileIcon from './ProfileIcon'
function PostModal(props) {
    const {setLoggedIn,setModalState,setModalContent,setCurrentView}=useContext(Context)
    return (
      <div className='relative min-w-[20rem] w-[30%]  gap-y-4 bg-neutral-700 rounded-md p-2 flex flex-col justify-center items-center fill-neutral-50 max-h-[30rem]'>
        <div className=' max-w-[21rem]  min-h-[25rem] max-h-[45rem] w-[21rem] min-w-[10rem] flex flex-col rounded-md p-1 '>
            <div className=' w-full min-h-[3rem] postHeader flex justitems-center px-2 gap-x-2 '>
                <ProfileIcon />
                <h1 className='font-bold'>{props.data.Username}</h1>
            </div>
            <div className=' border-neutral-400  min-h-[10rem] min-w-[10rem] flex justify-center postContent'>
                <img src={props.data.Image} class='h-full w-full max-w-[15rem] max-h-[15rem] 'alt="" />
            </div>
            <div className=' w-full  postCaption py-2'>
            {props.data.Caption!=''?<p className='text-[17px] font-bold  mt-[1px]'>{props.data.Caption}</p>:<></>}
            </div>
        <div>
        <p className='text-[15px] font-semibold  mt-[1px]' >Comments</p>
      </div>
      <div className=' w-full min-h-[5rem] border-neutral-400 border-b-1 postComents p-2 flex flex-col gap-y-2 text-[10px]'>
        {props.data.Caption?<p>there is a comment</p>:<p>there are no comments</p>}
        <input type="text" placeholder='addComment' className='bg-neutral-700 border-neutral-200 border-[1px]  rounded-md p-1 absolute bottom-2 w-[20rem] outline-none'/>
      </div>
      </div>  
      </div>
    )
}

export default PostModal