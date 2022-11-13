import React ,{useState}from 'react'


import search from '../jsonfiles/widjson'


const Widget = () => {
    const[data,setData]=useState(search)
  return (
 <>
{
    data.map((val,index)=>{
        return  <div className='widget p-6  w-full m-2 shadow-lg bg-white rounded-lg' key={index}>
            <div className='main  h-20 flex w-full'>
                <div className='right w-1/3'>
anmanand
                </div>
                <div className='left w-40'>
        <div className='left h-10'>{val.name}</div>
        <div className='right'> <b>{val.last_used}</b></div>
        </div>
        </div>
     </div>
    })
}

 </>
  )
}

export default Widget