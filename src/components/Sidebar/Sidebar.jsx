import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import {  UilSignOutAlt ,UilBars  } from "@iconscout/react-unicons";
import { SidebarData } from '../../Data/Data';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Outlet,NavLink } from 'react-router-dom'


const Sidebar = ({setId}) => {

    const [selected,setSelected] = useState(0);
    const [exparded,setExpanded] = useState(false);

    const sidebarVarian = {
        true : {
            left : '0'
         },
        false : {
            left: '-60%'
        } 
    }
  return (

    <>   
     <div className='bars' onClick={()=>setExpanded(!exparded)} style={exparded ? {left:'60%'} : {left:'5%'}}>
            <UilBars/>
        </div>
     <motion.div className='sidebar' variants={sidebarVarian} animate={window.innerWidth<=786? `${exparded}` : ""}>
        <div className='logo'>
            <img src={Logo} alt=''/>
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

        {/* menu */}

        <div className='menu'>
           {SidebarData.map((item,index)=>{
            return (
                <NavLink to={`/react-new-admin-panel/${item.url}`} className='menuItem'
                     key={index} >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </NavLink>
            )
           })}
           <div className='menuItem'>
            <UilSignOutAlt/>
           </div>
        </div>
    </motion.div>
    </>

  )
}

export default Sidebar;