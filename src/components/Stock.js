import React from 'react';
import stockData from '../data';
import './Stock.css';
import Menulist from './menu';

function Stock() {
  return(
    <header>
        <div id="box-one">I AM HERE</div>
        <div id="answerKey">Data One</div>
        <div id="answerKey">Data Two</div>
        <div id="answerKey">Data Three</div>
        <div>Choose a menu: <Menulist /></div>
        <div>
  
          {stockData.map((data, key) => {
          
            return(
              <div key={key}>
                  { data.FastFood }
                  
                  
              </div>
              
            );

          })}
          </div>  
         
        
      </header>
  );
}
  export default Stock;