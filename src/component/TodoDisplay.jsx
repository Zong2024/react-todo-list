const TodoDisplay = ({ todo, onToggle }) => {
  return (
    <div>
      <div className="form-check me-3">
        <input
          className="form-check-input"
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label className="form-check-label me-auto" htmlFor={`todo-${todo.id}`}>
          <span
            className={`${
              todo.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            {todo.text}
          </span>
        </label>
      </div>
    </div>
  );
};

export default TodoDisplay;
