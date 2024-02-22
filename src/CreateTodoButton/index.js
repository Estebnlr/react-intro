import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({setOpenModal}) {
  return (
    <div className="contenButton">
      <p className="byMe">By <a href="https://estebnlr.github.io/manuel-lucero/portafolioCV/index.html" target="_blank" rel="author">Manuel Lucero</a></p>
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