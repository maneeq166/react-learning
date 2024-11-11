import React from 'react';

function Navbar({favouriteones}){
return(
     <div className='w-full px-7 py-3 flex justify-between items-center '>
        <h3>Orange</h3>
        <div className='flex bg-orange-500 px-3 py-1 text-sm rounded-md gap-3 text-white' >
            <h3>Favourites</h3>
            <h4>{favouriteones}</h4>
        </div>
     </div>
    )
}
export default Navbar