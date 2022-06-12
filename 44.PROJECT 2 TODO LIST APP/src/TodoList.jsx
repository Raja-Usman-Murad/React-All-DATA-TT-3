import React from "react";
const TodoList = (props) => {

  return (
    <>
    <div className='mainLiDivd'>
    <i className='fa fa-arrows-alt' onClick={()=>{
        props.onSelect(props.id)
    }}/>
      <li className='liTd'>{props.text}</li>
    </div>
    </>
  );
};
export default TodoList;
