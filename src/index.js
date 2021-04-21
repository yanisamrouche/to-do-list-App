import React from 'react';
import ReactDOM from 'react-dom';
import DoList from './App';
import reportWebVitals from './reportWebVitals';
const tasks = [];
ReactDOM.render(
  <React.StrictMode>
    <h1>To-Do-List</h1>
    <DoList  data={tasks}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
