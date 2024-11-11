import React from 'react'
import {useForm} from 'react-hook-form'
function Form({handleSubmitForm}) {
  const {register,handleSubmit,reset}= useForm()
  const submitForm = data =>{
    handleSubmitForm(data)
    reset()
  }

  return (
    <div className='mt-10 flex gap-10 justify-center '>
      <form className='gap-10 flex ' onSubmit={handleSubmit(submitForm)}>
        <input {...register('name')} className='px-2 py-1 rounded-md  text-xs font-semibold outline-none' type="text" placeholder='name'/>
        <input {...register('email')} className='px-2 py-1 rounded-md text-xs font-semibold outline-none' placeholder='email' type="text" />
        <input {...register('image')} className='px-2 py-1 rounded-md text-xs font-semibold outline-none' placeholder='image url' type="text" />
        <input className='px-5 py-1 text-white rounded-md text-base font-semibold bg-blue-600' type="submit" />
      </form>
    </div>
  )
}

export default Form