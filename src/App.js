import React from 'react';
import './App.css';
import Footer from './components/footer';
import Menulist from './components/menu';
import showMenu from './components/menu';


export default function App() {
  return (
    
    <div className="App">
      
     <p>MENU</p>
     
       <ul>
         <li className="list-one">Healthy</li>
         <li className="list-two">Fast cook</li>
         <li className="list-three">Soups</li>
         
       </ul>
      <Menulist />
      <button className='btn-primary' onClick={alert()}>ENTER</button>
      <showMenu />
    
    </div>
    
  );
}


<Footer />


