// import { useState } from "react";

// const Calc = ()=>{


//     const [result, setResult] = useState('');

//     const handleClick = (e) => {
//       setResult(result.concat(e.target.name));
//     };
  
//     const clear = () => {
//       setResult('');
//     };
  
    
  
//     const calculate = () => {
//       try {
//         setResult(eval(result).toString());
//       } catch (err) {
//         setResult('Error');
//       }
//     };
  
//     return (

//         <div>

//            
//             <form>
//              <input type="text" value={result} />
//             </form>
//            <br/>
//            <br/>
//         <div>
//            <button onClick={handleClick} style={{margin:"5px"}}>7</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>8</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>9</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>+</button>
//         </div>

//         <div>
//            <button onClick={handleClick} style={{margin:"5px"}}>4</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>5</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>6</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>-</button>
//         </div>

//         <div>
//            <button onClick={handleClick} style={{margin:"5px"}}>1</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>2</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>3</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>*</button>
//         </div>

//         <div>
//            <button onClick={clear} style={{margin:"5px"}}>C</button>
//            <button onClick={handleClick} style={{margin:"5px"}}>0</button>
//            <button onClick={calculate} style={{margin:"5px"}}>=</button>
//            <button onClick={handleClick}  style={{margin:"5px"}}>/</button>
//         </div>
          
//         </div>
//     );
// }

// export default Calc;


import React, { useState,useRef } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');
 // const inputRef = useRef(null);

  const handleClick = (e) => {

   // setResult(result.concat(e.target.name));
   setExpression(expression.concat(e.target.name))
    //inputRef.current.value = expression;

  };

  const clear = () => {
    setExpression('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(expression).toString());
    } catch (err) {
      setResult('Error');
    }
  };



  return (
    <div >
           <h1>React Calculator</h1>
      <form>
        <input type="text" value={expression} />
      </form>

    
      <div >
       
        {/* {result && <p>{result}</p>} */}
        <p>{result}</p>
      
   
    <div>
        <button name="7" onClick={handleClick} style={{margin:"5px"}}>7</button>
        <button name="8" onClick={handleClick} style={{margin:"5px"}}>8</button>
        <button name="9" onClick={handleClick} style={{margin:"5px"}}>9</button>
        <button name="+" onClick={handleClick} style={{margin:"5px"}}>+</button>
    </div>
    <div>
        <button name="4" onClick={handleClick} style={{margin:"5px"}}>4</button>
        <button name="5" onClick={handleClick} style={{margin:"5px"}}>5</button>
        <button name="6" onClick={handleClick} style={{margin:"5px"}}>6</button>
        <button name="-" onClick={handleClick} style={{margin:"5px"}}>–</button>
    </div>
    <div>
        <button name="1" onClick={handleClick} style={{margin:"5px"}}>1</button>
        <button name="2" onClick={handleClick} style={{margin:"5px"}}>2</button>
        <button name="3" onClick={handleClick} style={{margin:"5px"}}>3</button>
        <button name="*" onClick={handleClick} style={{margin:"5px"}}>*</button>
    </div>
    <div>
        <button onClick={clear}  style={{margin:"5px"}}>C</button>
        <button name="0" onClick={handleClick} style={{margin:"5px"}}>0</button>
        <button name="=" id="btn" onClick={calculate}  style={{margin:"5px"}}>=</button>
        <button name="/" onClick={handleClick} style={{margin:"5px"}}>/</button>
    </div>
      </div>
    </div>
  );
};

export default Calculator;
