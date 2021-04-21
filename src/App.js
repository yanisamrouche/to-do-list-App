import React, { useState } from 'react';
import './style.css';

/* First component */
function ToDoListForm(props) {

  var arr = props.todos;

  function handleChange(e){
    props.setTodo(e.target.value);
  }

  function handleSubmit(e){
    props.handleSubmit(props.todo);
    props.setTodo([]);
    e.preventDefault();
  }

  function deleteSubmit(){
    props.setTodos(arr.filter((el) => el.id !== props.todo.id))
    
  }
  return (

    <div>
   
      <form >
      <input type="text" placeholder="Add your task" onChange={handleChange} value={props.todo}></input>
      <button type="submit" onClick={handleSubmit}>add</button>
      <button type="submit" onClick={deleteSubmit}>clear</button>
      </form>

    </div>
    
 
    

  );
}

/* Second component */
function TaskList(props){
  var arr = props.todos;


  const listItems = arr.map((val, i) => <div className="item"><li key={i}>task n° {i+1} : {val}</li>
  <br></br>
  </div>);
  

  return (<div>
    <ul>{listItems}</ul>
    </div>);
    
  

}

/* parent component */
function DoList(props){

  const [todo, setTodo] = useState([]);
  var [todos, setTodos] = useState(props.data);

  function addTodo(task){
    setTodos([...todos, task]);
  }



    
  

  return (
    <div className="app">
      <h1>ToDo-List</h1>
      <ToDoListForm todos={todos} todo={todo} setTodo={setTodo} handleSubmit={addTodo} />
      <TaskList todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} />
    </div>

  );

}

export default DoList;