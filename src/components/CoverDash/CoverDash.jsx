import React from 'react'
import "./CoverDash.css"
import MainDash from '../MainDash/MainDash'
import Orders from '../Orders/Orders'
import Customers from '../Customers/Customers'
import Products from '../Products/Products'
import Analytics from '../Analytics/Analytics'


const CoverDash = ({id}) => {
  return (
    
    <div className='CoverDash'>
{id === 0 && <MainDash/> }
{id === 1 && <Orders/> }
{id === 2 && <Customers/>}
{id === 3 && <Products/> }
{id === 4 && <Analytics/>}
    </div>
    
  )
}

export default CoverDash