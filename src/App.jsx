import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'


function App() {

  const data = [
    {name:"john", profession : 'carpenter',image:"https://plus.unsplash.com/premium_photo-1727942419368-77dad3b8a8dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
      ,friends: false
    },
    {name:"ramsey", profession : 'developer',image:"https://images.unsplash.com/photo-1729549013233-4035d2019014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
      ,friends: false
    },
    {name:"elliot", profession : 'chef',image:"https://plus.unsplash.com/premium_photo-1727976490037-a4f7c7341e7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
      ,friends: false
    },
    {name:"simons", profession : 'designer',image:"https://plus.unsplash.com/premium_photo-1727942421719-b2caadc2db9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
      ,friends: false
    }
  ] 
 
  const [realdata,setdata]=useState(data)
  console.log(realdata);
  
  return (
  <div className='w-full h-screen bg-slate-500 flex gap-3 justify-center items-center'>
    {realdata.map((item,index)=>
      <Card key={index} image={item.image} name={item.name} profession={item.profession}/>   
    )}
  </div>
  )
}


export default App
