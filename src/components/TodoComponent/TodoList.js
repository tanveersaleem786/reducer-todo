import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log("TodoList",props.state);
    return (
       <div>
        <ul id="myUL">          
            {props.state !== null && props.state.map(todo => (
             <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))}       
         </ul>
        <button className="addBtn  completedBtn" onClick={props.clearCompleted}>Clear Completed</button>
       </div> 
    );
  };
  
  export default TodoList;
