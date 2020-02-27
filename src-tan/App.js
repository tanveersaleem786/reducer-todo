import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


import { initialState, todoReducer } from "./reducers";



import "./components/Todo.css";

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <div id="myDIV" className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />              
      </div>
      <TodoList  todos={this.state.todos} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/> 
    </div>
  );
}

export default App;
