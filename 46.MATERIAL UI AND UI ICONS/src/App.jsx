import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import "./index.css";
import Tooltip from '@material-ui/core/Tooltip';

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
      <div className='internal'>
        <div className="count">
          <h1>{count}</h1>
        </div>
        <div className='btn'>
        <Tooltip title="Add">
          <Button className='btn_hoverAdd' onClick={incNum}>
            <AddIcon style={{ fontSize: 70 }}/>
          </Button>
          </Tooltip>

<Tooltip title="Delete">
          <Button className='btn_hoverSub' onClick={decNum}>
            <DeleteIcon style={{ fontSize: 70 }}/>
          </Button>
          </Tooltip>
        </div>
        </div>
      </div>
    </>
  );
};
export default App;
