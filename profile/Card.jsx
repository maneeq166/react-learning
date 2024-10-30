import React from 'react';

function Card({name,profession,image}){
    return(
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-40 bg-sky-300 '>
            <img className='h-full w-full object-cover object-top' src={image} alt="lol" />
        </div> 
        <div className='w-full p-3'>
            <h1 className='font-semibold text-xl'> {name} </h1>
            <h3 className=' text-xs'>{profession}</h3>
            <button className='px-3 py-1 m-1 bg-sky-600 rounded-sm font-semibold text-xs text-white' >Add friend</button>
        </div>
    </div>  
    )
}
export default Card