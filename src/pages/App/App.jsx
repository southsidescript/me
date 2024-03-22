import React from 'react';
import Header from '../Header/header';
import Body from '../Body/body';

import {Routes,Route
  } from "react-router-dom";
import Contact from '../Contact/contact'



const  App = () => {
  return  <>
                     <div id='cursor'></div>
                     <div id='cursor_aura' className='cursor_aura'></div>
                     <Header/>
                     <Routes>
                       <Route path='/' element={<Body/>}></Route>
                       <Route path='/contact' element={<Contact/>}></Route>          
                    </Routes> 
 </>
}
export default App;


