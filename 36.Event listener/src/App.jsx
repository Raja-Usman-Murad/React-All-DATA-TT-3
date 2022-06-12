import React, { useState } from "react";

const App = () => {
    const obg="red";
    const te = "click me to change"
    const tee = "click me to original"
    const[cbg,ccbg]=useState(obg)
    const[text,ctext]=useState(te)
    const[textt,ctextt]=useState(tee)


const chngbg=()=>{
    const obg = "black";
    ccbg(obg)
    const tex="ouch! 👺"
ctext(tex)
}
const chngbgo=()=>{
ccbg(obg)

ctextt(te)
}

  return (
    <>
      <div className="Ediv" style={ {background:cbg, width:'100vw' ,height:'100vh'} }>
          <button className='Ebutton' onClick={chngbg}>{text}</button>
          <button className='Ebutton' onClick={chngbgo}>{textt}</button>
      </div>
    </>
  );
};
export default App;
