import './TodoList.css';

function TodoList({ children }) {
  return (
    <div className="contentTodoList">
      <div className="TodoList">
        {children}
      </div>
    </div>
  );
}

export { TodoList };

