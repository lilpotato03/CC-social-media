import React, { useContext } from 'react'
import Modal from './Modal.jsx'
import { Context } from '../../context/AppContext.jsx'


function NavbarItem(props) {

  const {modalState,setModalState}=useContext(Context)


  return (
   <div className='flex gap-x-3 items-center'>
     <div className='md:size-8 size-5 fill-white '>
        {props.children}
    </div>
    <h1 class='md:font-bold md:nav-tt-vis nav-tt-nvis w-0'>{props.name}</h1>
   </div>
  )
  
}   

export default NavbarItem
