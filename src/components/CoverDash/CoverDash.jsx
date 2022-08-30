import React from 'react'
import "./CoverDash.css"
// import Routing from '../Sidebar/Routing'
import MainDash from '../MainDash/MainDash'
import Orders from '../Orders/Orders'
import Customers from '../Customers/Customers'
import Products from '../Products/Products'
import Analytics from '../Analytics/Analytics'
import Error from '../Error'
import { Routes , Route } from 'react-router-dom';


const CoverDash = ({id}) => {
  return (
    

    <div className='CoverDash'>
      <Routes>
        <Route path='/react-new-admin-panel/mainDash' element={ <MainDash/>}/>
        <Route path='/react-new-admin-panel/orders' element={ <Orders/>}/>
        <Route path='/react-new-admin-panel/customers' element={ <Customers/>}/>
        <Route path='/react-new-admin-panel/products' element={ <Products/>}/>
        <Route path='/react-new-admin-panel/analytics' element={ <Analytics/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
{/* {id === 0 && <MainDash/> }
{id === 1 && <Orders/> }
{id === 2 && <Customers/>}
{id === 3 && <Products/> }
{id === 4 && <Analytics/>} */}
    </div>

 
    
  )
}

export default CoverDash