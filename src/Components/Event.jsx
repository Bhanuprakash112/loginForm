import React from 'react'
import { useState } from 'react'

const Event = () => {

      const [number, setnumber]=useState(0)

      const increament =()=>{
         setnumber(number +1)
         
      }
      const decreament =()=>{
       if(number >1){
           setnumber(number-1)  
       }
      }
      const reset =()=>{
        setnumber(0)
      }
      
      
         
  return (
    <div className="Event flex justify-center flex-col items-center">
        <h1>Bhanu</h1>
        <p>Siva</p>

        
        <h1>{number}</h1>
           <div className=" flex flex-row gap-5">
            
            <button className="bg-blue-600 py-2 px-10 rounded-lg text-white font-semibold" onClick={increament}>increament</button>
            <button className="bg-red-600 py-2 px-10 rounded-lg text-white font-semibold" onClick={decreament}>decreament</button>
            <button className="bg-slate-600 py-2 px-10 rounded-lg text-white font-semibold" onClick={reset}>decreament</button>
           </div>
    </div>
  )
}

export default Event