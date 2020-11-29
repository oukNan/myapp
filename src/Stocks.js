import React from "react";

import './App.css';
import stockData  from './data';




    export const Stocks = () => {
        return (
            <>
                <div className="stock-container">Welcome
                    {stockData.map((data, key) => {
                        return(
                            <div key={key}>
                                {data.FastFood + "," + data.culture + ", " + data.stockPrice + ", " + data.timeElapsed}
                            </div>
                        );
                    })}  
                
                </div>  
            </>
    
        );
        
    };
    
    
      export default Stocks;




 



