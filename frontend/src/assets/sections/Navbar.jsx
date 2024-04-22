import React, { useEffect } from 'react'
import NavbarItem from '../components/NavbarItem'
import Modal from '../components/Modal'
import { useContext } from 'react'
import { Context } from '../../context/AppContext'
import axios from 'axios'


function Navbar() {

  const {currentUser,setCurrentView}=useContext(Context)

  function genCreateMd(){
    setModalState(!modalState)
    setModalContent(()=>{
      return(
        <div className='min-w-[20rem] w-[40%]  h-[80%] rounded-md bg-neutral-700 flex flex-col p-2 gap-y-2'>
          <div className='border-b-2 border-neutral-600 w-full h-[3rem] flex justify-center items-center'>
            <p>Create post</p>
          </div>
          <div className='w-full h-full gap-y-4  flex flex-col justify-center items-center text-neutral-600 font-bold fill-neutral-600'>
           <div className='flex flex-col w-full items-center'>
           <div className='size-10'>
            <svg fill="currentColor"  version="1.1" id="Layer_1"  xmlns:xlink="http://www.w3.org/1999/xlink" 
	          viewBox="0 0 511.999 511.999" xml:space="preserve">
            <g>
              <g>
                <g>
                  <path d="M468.225,106.667h-31.537l-18.902-56.708c-1.452-4.356-5.527-7.294-10.118-7.294H237.003
                    c-4.592,0-8.667,2.938-10.118,7.294l-18.907,56.708h-89.535V74.663c0-5.889-4.778-10.667-10.667-10.667H43.775
                    c-5.892,0-10.667,4.778-10.667,10.667v33.323C14.111,112.761,0,129.979,0,150.435v232.456c0,24.138,19.637,43.775,43.775,43.775
                    h28.56v32.002c0,5.891,4.778,10.667,10.667,10.667h346.001c5.891,0,10.667-4.775,10.667-10.667v-32.002h28.556
                    c24.138,0,43.775-19.637,43.775-43.775V150.435C512,126.302,492.363,106.667,468.225,106.667z M244.69,63.998h155.287
                    l14.223,42.669H230.466L244.69,63.998z M54.441,85.329H97.11v21.338H54.441V85.329z M418.335,448.001H93.668v-21.335h324.667
                    V448.001z M490.667,382.891c0,12.375-10.067,22.442-22.442,22.442h-39.222H194.209V373.33c0-5.891-4.775-10.667-10.667-10.667
                    c-5.889,0-10.667,4.775-10.667,10.667v32.002h-21.327V206.556c0-5.892-4.775-10.667-10.667-10.667
                    c-5.889,0-10.667,4.774-10.667,10.667v198.777H83.001H43.775c-12.375,0-22.442-10.067-22.442-22.442V150.435
                    C21.333,138.064,31.4,128,43.775,128h64.002h107.889h213.332h0.021h39.206c12.375,0,22.442,10.064,22.442,22.435V382.891z"/>
                  <path d="M322.333,149.331C257.635,149.331,205,201.967,205,266.664s52.636,117.333,117.333,117.333
                    s117.333-52.635,117.333-117.333S387.03,149.331,322.333,149.331z M322.333,362.664c-52.933,0-96-43.066-96-96
                    c0-52.935,43.067-96,96-96c52.935,0,96,43.064,96,96C418.332,319.597,375.268,362.664,322.333,362.664z"/>
                  <path d="M322.333,192c-41.173,0-74.669,33.493-74.669,74.664c0,3.975,0.323,7.979,0.958,11.904
                    c0.848,5.239,5.377,8.964,10.516,8.964c0.566,0,1.141-0.046,1.718-0.14c5.814-0.942,9.764-6.418,8.822-12.236
                    c-0.452-2.8-0.684-5.659-0.684-8.494c0-29.406,23.927-53.331,53.335-53.331c5.891,0,10.667-4.775,10.667-10.667
                    C332.999,196.777,328.224,192,322.333,192z"/>
                  <path d="M280.632,299.914c-3.667-4.608-10.375-5.373-14.99-1.707c-4.608,3.669-5.373,10.379-1.705,14.99
                    c1.707,2.144,3.585,4.248,5.583,6.254c2.085,2.09,4.819,3.135,7.554,3.135c2.725,0,5.45-1.038,7.532-3.112
                    c4.173-4.16,4.183-10.914,0.022-15.086C283.19,302.943,281.844,301.439,280.632,299.914z"/>
                  <path d="M140.883,156.098c-5.889,0-10.667,4.775-10.667,10.667v6.971c0,5.889,4.778,10.667,10.667,10.667
                    c5.891,0,10.667-4.778,10.667-10.667v-6.971C151.549,160.872,146.775,156.098,140.883,156.098z"/>
                  <path d="M448.422,153.72c-8.811,0-15.998,7.187-15.998,15.998c0,8.817,7.187,16,15.998,16c8.815,0,16.002-7.183,16.002-16
                    C464.423,160.909,457.235,153.72,448.422,153.72z"/>
                </g>
              </g>
            </g>
            </svg>
            </div>
            <div>
              Photos and Vidoes
            </div>
           </div>
            <form  method='POST' action='/api/addPost' enctype="multipart/form-data" className='flex flex-col relative items-center justify-center px-2 h-[2rem] bg-blue-500 rounded-md font-bold text-white text-[13px] w-[15rem]' onSubmit={()=>{
                window.location('http://localhost:5173/')
                return false
            }}>
              <label htmlFor="upload" className='absolute'>Select Photos and Videos to uplaod</label>
              <input  id='upload' className=' invisible  w-full h-0 mb-20' type="file"  name="upload" accept="image/png, image/jpeg" />
              <label htmlFor="caption" className='mt-10'>Caption</label>
              <input type="text" name='caption' id='caption' placeholder='Enter caption' className='input'/>
              <input type="text" className='invisible h-0' name='username' value={currentUser} />
              <button className='bg-neutral-100 text-blue-400 px-2 py-1 rounded-md'  type='submit'>Submit</button>
            </form>
          </div>
        </div>
      )
    })
  }
  function genSettingMd(){
    setModalState(!modalState)
    setModalContent(()=>{
      return(
        <div className='min-w-[20rem] w-[30%] h-[80%] gap-y-4 bg-neutral-700 rounded-md p-5 flex flex-col justify-center items-center fill-neutral-50'>
          <div className=' w-[15rem] h-[3rem] flex gap-x-2 items-center pl-4'>
            <div className='size-7 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            </div>
            <div className='font-semibold'>Change Appearance</div>
          </div>
          <div className=' w-[15rem] h-[3rem] flex gap-x-2 items-center pl-4'>
            <div className='size-7 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            </div>
            <div className='font-semibold'>Saved</div>
          </div>
          <div className=' w-[15rem] h-[3rem] flex gap-x-2 items-center pl-4 cursor-pointer' onClick={()=>{setLoggedIn(false)
          setModalState(false)
          setModalContent(<></>)}}>
            <div className='size-7 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            </div>
            <div className='font-semibold'>Log Out</div>
          </div>     
        </div>
      )
    })
  }

  const {modalState,setModalState,setModalContent,setLoggedIn}=useContext(Context)

  // useEffect(()=>{
  //   const getUsers=async()=>{
  //     const result=await axios.get('/api/readAllUsers')
  //     console.log(result.data)
  //   }
  //   getUsers()
  // },[modalState])

  return (
    <div className='md:navbar-side navbar-bottom bg-neutral-900 fill-white overflow-hidden'>
      <NavbarItem name='Connectify'>
        <svg  viewBox="0 0 24 24" fill="none" onClick={()=>setCurrentView('home')}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor"/>
        </svg>
      </NavbarItem>
      <NavbarItem name='Search' condition='partial'>
      <svg  viewBox="0 0 24 24" fill="none" >
      <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </NavbarItem>  
      < NavbarItem name='Explore'>
      <svg fill="currentColor" viewBox="0 0 32 32" id="icon" >
      <path d="M22.707,9.2931a.9992.9992,0,0,0-1.0234-.2417l-9,3a1.001,1.001,0,0,0-.6323.6323l-3,9a1,1,0,0,0,1.2651,1.2651l9-3a1.0013,1.0013,0,0,0,.6323-.6324l3-9A1,1,0,0,0,22.707,9.2931ZM11.5811,20.419l2.2094-6.6284L18.21,18.21Z"/>
      <path d="M16,30A14,14,0,1,1,30,16,14.0158,14.0158,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Z"/>
       </svg>
      </NavbarItem>
      <NavbarItem name='Notifications'>
      <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
      </NavbarItem>
      <NavbarItem name='Create' >
      <svg   onClick={genCreateMd} fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      </NavbarItem>
      <NavbarItem name='Profile'>
      <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={()=>setCurrentView('profile')}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      </NavbarItem>
      <NavbarItem name='Settings' >
      <svg  onClick={genSettingMd} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      </NavbarItem>
    </div>
  )
}

export default Navbar
