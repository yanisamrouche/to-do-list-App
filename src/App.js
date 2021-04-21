import React, { useState } from 'react';
import './style.css';

/* First component */
function ToDoListForm(props) {

  const [todo, setTodo] = useState([]);

  function handleChange(e){
    setTodo(e.target.value);
  }

  function handleSubmit(e){
    props.handleSubmit(todo);
    setTodo([]);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add your task" onChange={handleChange} value={todo}></input>
      <button type="submit">add</button>
    </form>
  );
}

/* Second component */
function TaskList(props){
  const arr = props.data;

  const listItems = arr.map((val, i) => <div className="item"><li key={i}>task n° {i+1} : {val}</li>
  <button type="submit">remove</button>
  </div>);

  return<ul>{listItems}</ul>
    
  

}

/* parent component */
function DoList(props){

  const [todos, setTodos] = useState(props.data);

  function addTodo(task){
    setTodos([...todos, task]);
  }

  return (
    <div className="app">
      <h1>ToDo-List</h1>
      <ToDoListForm handleSubmit={addTodo}/>
      <TaskList data={todos} />
    </div>

  );

}

export default DoList;