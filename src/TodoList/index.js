import './TodoList.css';

function TodoList({ children }) {
  return (
    <div className="contentTodoList">
      <p>Encuentra tu tarea</p>
      <div className="TodoList">
        {children}
      </div>
    </div>
  );
}

export { TodoList };

