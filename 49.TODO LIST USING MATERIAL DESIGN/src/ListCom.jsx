import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListCom=(props)=>{
    const [line,setLine]=useState(false);
  


    const cutIt=()=>{
setLine(true)
    }
    const cutItBack=()=>{
        setLine(false)
    }
    return(
        <>
        <div className='mainLiDiv'>
        <span className='fa' onClick={cutIt}><DeleteIcon onDoubleClick={cutItBack} /></span>
        <li className='liT' style={{textDecoration : line ? 'line-through':'none'}}>{props.text}</li>
        </div>
        </>
    )
}
export default ListCom;