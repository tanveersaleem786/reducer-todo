import React, {useState,useReducer} from 'react';
import {initialState, todoReducer} from './reducers'
import './components/TodoComponent/Todo.css';

import TodoList from './components/TodoComponent/TodoList';
import TodoForm from './components/TodoComponent/TodoForm';

function App() {

 

  const [newTodo, setNewTodo] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);
  //console.log(state);
  //const [newTodo, SetNewTodo] = {};


  const submitTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
  }

  const handleChanges = e => {
    setNewTodo(e.target.value);    
  };

   
  const toggleTodo = todoId => {
    dispatch({type:"TOGGLE_TODO", payload: todoId}); 
    console.log(state);
  };

  const clearCompleted = e => {
    e.preventDefault();    
    dispatch({type:"CLEAR_COMPLETED_TODO"}); 
    //alert('asfsdaf');  
    //console.log('sfsadfa');
  };


  return (
    <div>
      <div id="myDIV" className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm submitTodo={submitTodo} handleChanges={handleChanges}  />               
      </div>
      <TodoList  state={state} toggleTodo={toggleTodo} clearCompleted={clearCompleted} />  
    </div>
  );
}

export default App;
