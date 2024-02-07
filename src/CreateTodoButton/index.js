import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({setOpenModal}) {
  return (
    <div className="contenButton">
      <button
      className="createTodo"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
    </div>
  );
}

export { CreateTodoButton };