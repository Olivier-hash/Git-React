import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import {useNavigate} from 'react-router-dom'


function Sidebar({setSelectedUser}) {

const navigate = useNavigate();

  return (
    <div className={`bg-[#8185B2]/10 h-p-5 rounded-r-xl overflow-y-scroll text-white`}>

      <div className='pb-33334s'>
        <div className='flex justify-between items-center'>
                   <div className='relative py-2 group'>
            <div className=' top-full right-0 z-20 w-32 p-5 rounded-md
            bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block'> 
              <p className='cursor-pointer text-sm'>Edit Profile</p>
            </div>
           </div>
        </div>
  
      </div>
      {/* users Profile */}
      <div className='flex flex-column'>        {userDummyData.map((user,index)=>(

          <div onClick={()=> {setSelectedUser(user)}}
          key={index}  className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${selectedUser?._id == user._id && 'bg-[#282142/50]'}`}>
            <div className='flex flex-col leading-5'>
            </div>
            {
              index >2 && <p className='absolute top-4 right-4 text-xs h-5 w-5 
              flex justify-center items-center rounded-full bg-violet-500/50'>
              {index}</p>
            }
          </div>
        ))}
      </div>

    </div>
  )
}


export default Sidebar