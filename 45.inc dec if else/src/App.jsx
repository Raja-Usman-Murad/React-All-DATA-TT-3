import React, { useState } from "react";
import "./index.css";

let App = () => {
  
  const [count, setCount] = useState(0);
  const incNum = () => {
    setCount(count + 1);
  };
  const decNum = () => {
    if(count >0){
    setCount(count - 1);
    }else{
      alert('Sorry,Zero Limit Reached')
      setCount(0)
    }
  };
  return (
    <>
      <div className="main">
        <div className="count">
          <h1>{count}</h1>
        </div>
        <div className='btn'>
          <button onClick={incNum}>ADD COUNT</button>
          <button onClick={decNum}>SUB COUNT</button>
        </div>
      </div>
    </>
  );
};
export default App;
