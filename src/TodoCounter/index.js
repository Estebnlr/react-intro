import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  return (
    <div  className="TodoCounter">
      <p>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </p>
    </div>
    
  );
}

export { TodoCounter };