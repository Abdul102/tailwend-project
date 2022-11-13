import React from 'react'
import { useState } from 'react'
import search from '../jsonfiles/widjson'



const Fcards = () => {
    const[data,setData]=useState(search)
  return (
  
     <>
      <div className='widget p-6    flex  m-4 shadow-lg'>
    {
        data.map((val ,index)=>{

            return    <div className='main w-3/6'><div className='left w-90 ml-4 bg-white boder-2 p-6 shadow-md'key={index}>
            <div className='left h-10'>{val.name}</div>
            <div className='right'> <b>{val.last_used}</b></div>
            </div>
            
</div>
         
     
        })
    }
    
    </div>
     </>
  
    





  )
}

export default Fcards