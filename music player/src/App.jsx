import { useState } from 'react'
import Card from './Card'
import Navbar from './navbar'



function App() {

 const data = [
  {name:'journey',artist:'Aneeq',added:false,
   image:'https://images.unsplash.com/photo-1727461144658-b4baf3b591bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D'},
  {name:'love',artist:'Aneeq',added:false,
   image:'https://plus.unsplash.com/premium_photo-1730156312719-ede1fb176125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'},
  {name:'college',artist:'Aneeq',added:false,
   image:'https://images.unsplash.com/photo-1617138278033-ac7e498321da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'},
  {name:'alone',artist:'Aneeq',added:false,
   image:'https://images.unsplash.com/photo-1725551516978-0b53f171b30c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'},
 ]
 
 const [songData,setSongdata] = useState(data)
  const handleClick = (index) => {
    setSongdata(songData.map((item,i)=>i===index?{...item,added:!item.added }: item));
};

const favouriteones = songData.filter((item)=>item.added).length

  return (
    <div className='w-full h-screen bg-slate-300'>
    <Navbar favouriteones={favouriteones} />
     <div className='flex flex-wrap px-10 mt-7 gap-8'>
     {songData.map((item,index)=>(
      <Card key={index}  item={item} 
      handleClick={()=>handleClick(index)}
      //  key={index} index={index} name={item.name} artist={item.artist}  added={item.added} image={item.image} inefficient way to do it 
        />
    ))}
     </div>
    </div>
  )
}


export default App
