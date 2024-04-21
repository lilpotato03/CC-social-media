import React, { useContext } from 'react'
import { Context } from '../../context/AppContext'
function Modal(props) {

  function closeModal(){
    setModalContent(<></>)
    setModalState(!modalState)
  }

  const {modalState,setModalState,modalContent,setModalContent}=useContext(Context)

  return (
    <div className='absolute w-full h-full z-20 bg-neutral-900 left-0 top-0 bg-opacity-55 fill-white flex justify-center items-center' >
        <div className='md:size-10 size-7  absolute md:right-10 md:top-10 right-10 top-10 cursor-pointer' onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </div>
        {modalContent}
    </div>
  )
}

export default Modal

