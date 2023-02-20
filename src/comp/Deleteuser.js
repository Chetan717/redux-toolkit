import React from 'react'
import { useDispatch } from 'react-redux'
import { clearalluser } from '../store/slices/UserSlice'
export default function Deleteuser() {

const dispatch = useDispatch()

  const deleteAll = () =>{
dispatch(clearalluser())
  }
  return (
    <>
      <div className='flex justify-center items-center'>
    <button onClick={deleteAll} className='border border-1 border-black p-2 bg-blue-300 rounded-[20px]'>DeleteAll</button>
    </div>
    </>
  )
}
