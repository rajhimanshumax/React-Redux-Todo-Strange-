import React from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';
import "./components/Output";
import {useSelector} from "react-redux";
import {allTodos} from "./features/todoSlice";
function App() {
  const todoList=useSelector(allTodos);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {
          todoList.map(item =>(
              <Output
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
              />
          ))
          }
        </div>
      <Input/>
      </div>
    </div>
  );
}

export default App;
