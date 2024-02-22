import React, { useState } from "react";
import * as math from 'mathjs';
import { useAtom } from "jotai";
import { calculate } from "./atom";

import './Calculator.css';
const Calculator = () => {

    const [result, setResult] = useAtom(calculate);

    const [expression, setExpression] = useState('');
  
    const ans = () =>{
        try{
            const answer = math.evaluate(expression);
            setResult(answer);
            
        }catch(error){
            setResult('Invalid Expression');
        }
        
    }
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            ans();
        }
      };

    return(
        <div>
            <div className="container">
                <div>
                    <input type="expression" 
                    value={expression} 
                    onChange={(event)=>{setExpression(event.target.value)}}
                    onKeyUp={handleKeyUp} />
                    
                </div>
                <div className="buttons">
                    <button onClick={ans}> = </button>
                    
                    <h2> {result} </h2> 
                </div>
            </div>
            
        </div>
        
    );
}

export default Calculator;