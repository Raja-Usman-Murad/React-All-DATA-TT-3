import React, { useState } from "react";

const App=()=>{

    const [firstName,setFirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [firstNameOnSubmit,setFirstNameOnSubmit]=useState('');
    const [lastNameOnSubmit,setlastNameOnSubmit]=useState('');

    const fName=(e)=>{
        setFirstName(e.target.value);
        
    }
    const lName=(e)=>{
setlastName(e.target.value)
    }

const onSubmit=(e)=>{
    e.preventDefault();
    setFirstNameOnSubmit(firstName);
    setlastNameOnSubmit(lastName);


}

    return(
        <>
        <form onSubmit={onSubmit} className='formF'>
            <h1 className='headingF'>Hello {firstNameOnSubmit} {lastNameOnSubmit}</h1>
            <input className='inputF' type='text' placeholder='enter your First name' onChange={fName} value={firstName}></input>
            <input className='inputF' type='text' placeholder='enter your Last name' onChange={lName} value={lastName}></input>
            <input className='btnF' type='submit'></input>
        </form>
        </>
    )
}
export default App;