import React from 'react';

const Todo = props => {
    // console.log(props);
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
   
        //console.log(props);
      
        return (         
        <li className={props.todo.completed ? " checked" : ""}  onClick={() => props.toggleTodo(props.todo.id)}>{props.todo.item}<br></br>Tags: {props.todo.tags}</li>
        );
      };
      
  
  export default Todo;
