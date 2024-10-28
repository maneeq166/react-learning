import React, { useState } from 'react';
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";
export default function Use(){

   const [staty,usestaty] = useState(false)
   
   console.log(staty)
    const [val,setVal]= useState(false)
    return(
        <div className='w-full overflow-hidden h-screen bg-zinc-500 flex justify-center items-center'>
            <div className=' relative bg-zinc-300 w-70 h-40 rounded flex overflow-hidden '>
                <img className={`w-full h-full transition-transform duration-700 ease-in-out ${val === false  ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover shrink-0`} src="https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lol" />
                <img className={`w-full h-full transition-transform duration-700 ease-in-out ${val === false  ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover shrink-0`} src="https://plus.unsplash.com/premium_photo-1664104722498-7fa26de2144d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="lol" />
                <span onClick={()=>setVal(()=>!val)} className={`w-8 h-8 bg-[#dadada7a] flex justify-center  rounded-full items-center absolute bottom-1/4 ${val === false ?'right-4': 'left-7'} -translate-x-[50%] -translate-y-[50%] cursor-pointer  `}>
                {val ? <FaArrowLeft size={'.7em'} /> : <FaArrowRight size={'.7em'} />}
                </span>
            </div>
        </div>
    )
}