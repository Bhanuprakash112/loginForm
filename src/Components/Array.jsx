import React from 'react'

import { userdata } from './Data'


const Array = () => {
    // const players=[
    
    //  {
    //     cricket:"dhoni",
    //     tennis:"sania",
    //     hero:"prabhas",
    //     director:"puri",
    //     movie:"gilli",
    //  }
      
    // ]
    
  return (
    

        <div className="flex justify-center py-5 gap-5  items-center  flex-col">
        {userdata.map((iteam)=>{
          return(
            <div className="border border-b-indigo-700 w-full flex justify-center items-center flex-col">
              {/* <h1>my favorite crickter {iteam.cricket}</h1>
              <h2>my favorite tennis {iteam.tennis}</h2>
              <h3>my favorite hero {iteam.hero}</h3>
              <h4>my favorite director {iteam.director}</h4>
              <h5>my favorite movie {iteam.movie}</h5> */}
               
               <div className="">{iteam.username}</div>
               <div>{iteam.email}</div>
               <div>{iteam.address.street}</div>
               <h1>Bhanu</h1>
              </div>
          )
           

        })}
    
    </div>
   
    
  )
}

export default Array;