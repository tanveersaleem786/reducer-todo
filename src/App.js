import React, {useState,useReducer} from 'react';
import {initialState, todoReducer} from './reducers'
import './components/TodoComponent/Todo.css';
import './components/Tags/Tags.scss';

import TodoList from './components/TodoComponent/TodoList';
import TodoForm from './components/TodoComponent/TodoForm';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [tags, setTags] = React.useState([]);

  const [state, dispatch] = useReducer(todoReducer, initialState);
 


  const submitTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: {newTodo:newTodo, tags: tags.length > 0 ? tags.join(', ') : '' } });
    setTags([]);
    setNewTodo('');
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
  };

  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = e => {
    if (e.target.value !== "") {
        setTags([...tags, e.target.value]);
        e.target.value = "";
    }
  };

  return (
    <div>
      <div id="myDIV" className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm submitTodo={submitTodo} handleChanges={handleChanges} addTags={addTags} tags={tags} removeTags={removeTags} />               
      </div>
      <TodoList  state={state} toggleTodo={toggleTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
