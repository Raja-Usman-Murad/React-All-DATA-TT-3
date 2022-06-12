import React, { useState } from "react";

const App=()=>{

    const [fullName,setFullName]=useState({
        fName:'',
        lName:'',
        email:'',
    });
    

    const inputEvent=(e)=>{
        // setFirstName(e.target.value);

        console.log(e.target.value);
        console.log(e.target.name);
        
        // const value = e.target.value;
        // const name = e.target.name;
        const {value,name}=e.target;
        setFullName( (preValue)=>{
                if(name==='fName'){
                    return{
                    fName:value,
                    lName:preValue.lName,
                    email:preValue.email,
                    };
                
                }else if(name==='lName'){
                    return{
                        lName:value,
                        fName:preValue.fName,
                        email:preValue.email,
                    };
                }else if(name==='email'){
                    return{
                        email:value,
                        fName:preValue.fName,
                        lName:preValue.lName,
                    }
                }
         } )
        
        
        
    }
    

const onSubmit=(e)=>{
    e.preventDefault();
    alert('Form Submitted');

}

    return(
        <>
        <form onSubmit={onSubmit} className='formF'>
            <h1 className='headingF'>Hello {fullName.fName} {fullName.lName}</h1>
<h3 className="headingE">{fullName.email}</h3>
            <input className='inputF' type='text' placeholder='enter your First name' onChange={inputEvent} value={fullName.fName}
            name="fName"></input>
            <input className='inputF' type='text' placeholder='enter your Last name' onChange={inputEvent} value={fullName.lName}
            name="lName"></input>
            <input className='inputF' type='text' placeholder='enter your Email' onChange={inputEvent} value={fullName.email}
            name="email"></input>
            <input className='btnF' type='submit'></input>
        </form>
        </>
    )
}
export default App;


// use state return simple object 