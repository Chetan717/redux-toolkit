import React from 'react'
import Deleteuser from './Deleteuser'
import { fakeuaser } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
import Display from './Display'

export default function Adduser() {

  const dispatch = useDispatch()

const adduaser = (payload) =>{
// console.log(payload)
dispatch(addUser(payload))
}

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
        <div>List of user Details</div>
    <button onClick={()=>adduaser(fakeuaser())} className='border border-1 border-black p-2 bg-pink-300 rounded-[20px]'>AddUser</button>
   <Display/>
    </div>
    <Deleteuser/>
    </>
  )
}
