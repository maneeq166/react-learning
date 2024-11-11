import React from 'react'
import Card from './Card'

function Cards({users,handleRemove}) {
  return (
    <div className='w-full h-72 max-h-72 overflow-auto p-4 flex gap-3 justify-center flex-wrap '>
        {users.map((item,index)=>{
          return <Card user={item} id={index} handleRemove={handleRemove} key={index} />
          })}
    </div>
  )
}

export default Cards