import React from 'react'

function Card({user,id,handleRemove}) {
  return (
    <div className='w-40  bg-zinc-300 flex p-2 flex-col  rounded-md items-center  '>
      <div className='image bg-blue-600 h-[3vw] w-[3vw] rounded-full overflow-hidden '>
        <img className='w-full h-full object-cover' src={user.image} alt="" />
      </div>
      <h1 className='text-xl font-semibold mt-2 text-center leading-none'>{user.name}</h1>
      <h4 className='text-xs px-4  font-semibold opacity-60 text-center'>{user.email}</h4>
      <p className='text-center text-xs mt-1 font-semibold leading-none tracking-tight '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button onClick={()=>handleRemove(id)} className='text-xs text-white font-semibold mt-2 bg-red-600 rounded-lg px-3 py-1'>remove it</button>
    </div>
  )
}

export default Card