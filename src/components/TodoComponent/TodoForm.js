import React from "react";

const TodoForm = (props) => {

  // const handleChanges = e => {
   
  // };

 
  // const submitTodo = e => {
  //   e.preventDefault();
   
  // };

 
    //console.log("rendering form", this.state.task);
    return (
      <form onSubmit={props.submitTodo}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="task" onChange={props.handleChanges} />
        <button className="addBtn" >Add</button>      
      </form>
      
      
    );

}

export default TodoForm;
