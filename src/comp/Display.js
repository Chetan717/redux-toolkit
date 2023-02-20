import React from 'react'
import { useSelector } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'
export default function Display() {

    const dispatch = useDispatch()

    const removeUsaer= (id) =>{

        dispatch(removeUser(id))

    }
    
  const data = useSelector((state)=>{
    return state.users
  })
  
  return (
    <>
    
    <div>hi

   {
    data?.map((user,id)=>{
       return( <>
        
        <li key={id}>
        
{user}
<button onClick={()=>removeUsaer(id)} className='border border-1 border-black rounded-[10px] bg-red-500 text-black p-2 ml-10'> Delete</button>

        </li>
        </>)
    })
   
   } 

    </div>
    </>
  )
}
