import React, { useState } from 'react'
import Cards from './Cards'
import Form from './Form'


function App() {
  const [users,setusers]=useState([])
  const handleSubmitForm = (data) =>{
    setusers([...users,data])
  }
  const handleRemove = (id) => {
    setusers(()=>users.filter((item,index)=>index!= id))
  }
  return (
    <div className='w-full h-screen bg-zinc-500 flex justify-center items-center '>
      <div className='container mx-auto'>
        <Cards handleRemove={handleRemove}  users={users} />
        <Form handleSubmitForm={handleSubmitForm} />
      </div>
    </div>
  )
}

export default App
