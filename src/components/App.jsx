import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setInput] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addFunction(event) {
    setInput((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addFunction}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => {
            return <li> {todoitem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
