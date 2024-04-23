import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/AppContext'
import axios from 'axios'
import ProfileIcon from './ProfileIcon'

function SearchBar() {

  
  const [searchText,setSearchText]=useState('')
  const [searchCards,setSearchCards]=useState([])
  const {currentUser,setProfileData,setCurrentView,setModalState}=useContext(Context)

  useEffect(()=>{
    const getData=async ()=>{
      const result=await axios.post('/api/searchUsers',{searchTxt:searchText},{headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
      var data=[]
      await result.data.forEach((er)=>{
        if (er.Username!=currentUser){
          data.push(er)
        }
      })
      setSearchCards(data)
    }
    if(searchText){
      getData()
    }else{
      setSearchCards([])
    }
  },[searchText])

  function genSearchCards(){
    return(
      <div className='w-full flex-col flex gap-y-2 mt-2 max-h-[20rem] overflow-scrol'>
      {searchCards.map((s)=>{
        return(
          <div className='bg-neutral-800 w-full flex px-2 items-center gap-x-2 text-[20px] py-1 rounded-md' onClick={()=>{setModalState(false)
          setProfileData(['other',s.Username])
          setCurrentView('profile')
            }
          }>
            <ProfileIcon />
            {s.Username}
          </div>
        )
      })}
      </div>
    )
  }
  return (
    <div className='w-[20rem]  bg-neutral-700 absolute top-20 rounded-md p-4 md:w-[30rem]  flex flex-col items-center'>
      <input type="text" placeholder='Search by Username...' className='bg-neutral-700 border-b-2 border-neutral-600 w-full px-2 outline-none' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
      {genSearchCards()}
    </div>
  )
}

export default SearchBar