import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (e) => {
    setInputList(e.target.value);
  };

  const btnClick = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

const deleteItems=(id)=>{
  console.log('deleted');
  setItems((oldItems)=>{
    return oldItems.filter((arrelem,index)=>{
return index !== id
    })
  })
   
}

  return (
    <>
      <div className="mainDIVd">
        <div className="todoMainDivd">
          <br />
          <h1 className='h1Td'>ToDo List</h1>
          <br />
          <input
          className='inputTd'
            type="text"
            placeholder="Add an Item"
            onChange={inputEvent}
            value={inputList}
          />
          <button className="btnAddd" onClick={btnClick}>
            
            +
          </button>

          <ol>
            {items.map((itemsVal,index) => {
              return (
                <>
                  <TodoList 
                  key={index}
                  id={index}
                  text={itemsVal}
                  onSelect={deleteItems} />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
