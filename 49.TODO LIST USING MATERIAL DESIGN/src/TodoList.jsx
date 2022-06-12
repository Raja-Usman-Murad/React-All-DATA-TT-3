import React,{ useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';
const TodoList=()=>{
const [item,setItem]=useState('');
const [newItem,setNewItem]=useState([]);
;


const itemEvent=(e)=>{
setItem(e.target.value);
}

const listOfItems=()=>{
    setNewItem((preVal)=>{
        return [...preVal , item]
    });
    setItem('');
}


    return(
        <>
<div className='mainDIV'>
    <div className='todoMainDiv'>
        <br />
        <h1 className='h1T'>TO DO TEXT</h1>
        <br />
        <input className='inputT' type='text' placeholder='Add An Item' onChange={itemEvent} value={item} />
        <Button className='btnAdd' onClick={listOfItems}> <AddIcon /> </Button>
        <br />
        <ol>
            
            {newItem.map((val,index)=>{
                return (
                    <ListCom text={val}
                        key={index}
        />
                )
            })
            }
        </ol>
    </div>
</div>
        </>
    )
}
export default TodoList;