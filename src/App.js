import React, { useState } from 'react';

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
      <button type="submit">Add</button>
    </form>
  );
}

/* Second component */
function TaskList(props){
  const arr = props.data;

  const listItems = arr.map((val, i) => <li key={i}>{val}</li>);

  return <ul>{listItems}</ul>

}




function DoList(props){

  const [todos, setTodos] = useState(props.data);

  function addTodo(task){
    setTodos([...todos, task]);
  }

  return (
    <div>
      <ToDoListForm handleSubmit={addTodo}/>
      <TaskList data={todos} />
    </div>

  );

}

export default DoList;