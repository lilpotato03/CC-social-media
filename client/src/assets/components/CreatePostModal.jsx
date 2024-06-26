import React, { useContext } from 'react'
import { Context } from '../../context/AppContext'

function CreatePostModal() {

    const {currentUser}=useContext(Context)
  return (
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
            <div> Photos and Vidoes</div>
           </div>
            <form  method='POST' action='/api/addPost' enctype="multipart/form-data" className='flex flex-col relative items-center justify-center px-2 h-[2rem] bg-blue-500 rounded-md font-bold text-white text-[13px] w-[15rem]'>
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
}

export default CreatePostModal