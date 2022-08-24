import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import RightSide from './components/RightSide/RightSide';
import Orders from './components/Orders/Orders';
import CoverDash from './components/CoverDash/CoverDash';
import { useState } from 'react';



function App() {
  const [id,setId] = useState(0);
 
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar setId = {setId} />
          <CoverDash id = {id} />
          <RightSide/>
        </div>
    </div>
  );
}

export default App;
