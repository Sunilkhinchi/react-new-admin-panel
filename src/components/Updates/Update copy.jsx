import React , { useState } from 'react'
import './Updates.css'

import { UpdatesData } from '../../Data/Data'
import {motion, AnimateSharedLayout } from 'framer-motion'

const  Updates = () =>  {

  const [expanded, setExpanded] = useState(true);

  return (

    <AnimateSharedLayout>
       {expanded? <CompactUpdate setExpanded={()=>setExpanded(false)}/> : <ExpandedUpdate setExpanded={()=>setExpanded(true)} /> }
    </AnimateSharedLayout >

  )
}




// function CompactUpdate

function CompactUpdate({setExpanded}){
   return (
    <div className="Updates" onClick={setExpanded}>
    {UpdatesData.map((update)=> {
        return (
            <div className='update'>
               <img src={update.img} alt="images"/>
               <div className="noti">
                    <div style={{marginBottom : "0.5rem"}}>
                        <span>{update.name}</span> 
                        <span> {update.noti}</span>
                    </div>
                    <span>{update.time}</span>
               </div>
               
            </div>
        )
    })}
</div>
   )
}

// function ExpandedCard

function ExpandedUpdate({setExpanded}){

  return (
    <div className='Update-single' onClick={setExpanded}>
          <span>test ha ji</span>   
               
    </div>
  )
  
}

export default Updates;