import React, { useState } from "react";

const App=()=>{
const [helloname,setheloname]=useState('')
const [hellonameclick,sethelonameclick]=useState('')

    const onChangee=(e)=>{
        // console.log('usman',e.target.value);
        setheloname(e.target.value)
    }
    const showname=()=>{
        // console.log('usman');
        sethelonameclick(helloname);
    }

    return(
        <>
        <div>
            <h1>HELLO {hellonameclick}</h1>
            <input onChange={onChangee} type='text' placeholder='enter your name' value={helloname}/>
            <button onClick={showname}>click me</button>
        </div>
        </>
    )
}
export default App;