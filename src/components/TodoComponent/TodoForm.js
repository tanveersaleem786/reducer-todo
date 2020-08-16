import React from "react";
import Tag from '../Tags/Tags';

const TodoForm = (props) => {

    return (
      <form onSubmit={props.submitTodo}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="task" onChange={props.handleChanges} />
        <Tag tags={props.tags} addTags={props.addTags} />
        <button className="addBtn" >Add</button>      
      </form>
    );
}

export default TodoForm;