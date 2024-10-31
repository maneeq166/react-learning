import React from 'react';

function Card({item,handleClick}){

// {index,name,artist,added,image} inefficient way to do it
    const {name,artist,image,added,index} = item

    return(
        <div className=' bg-white w-60  rounded-md flex  pb-10 relative'>
         <div className='bg-orange-500 h-20 overflow-hidden w-20 rounded-md m-3'>
            <img className='object-cover h-full w-full' src={image} alt="lol" />
         </div>
           <div className='m-3'>
             <h3 className='text-xl font-semibold leading-none '>
                {name}</h3>
                <h3 className='font-poppins text-xs'>{artist}</h3>
            </div>
            <button className='w-full absolute bottom-0 whitespace-nowrap  bg-orange-500 rounded-md text-white text-xs px-3 py-2'
            onClick={handleClick}
                // ()=>handleclick(index)}
            >{added===false?'Add favourite':'❤️'}</button>

        </div>
    )
}
export default Card

