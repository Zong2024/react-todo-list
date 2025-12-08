import { useState } from "react";
import EditInput from "./EditInput";

const TodoItems = ({ item, setTodo, todo }) => {
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const handleToggleComplete = (id) => {
    const toggleComplete = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(toggleComplete);
  };

  return (
    <div>
      <li className="d-flex fs-4 mt-2">
        <div className="form-check me-3">
          <input
            className="form-check-input"
            type="checkbox"
            id={`todo-${item.id}`}
            checked={item.completed}
            onChange={() => handleToggleComplete(item.id)}
          />
        </div>
        {editingId === item.id ? (
          <EditInput
            editingId={editingId}
            setEditingId={setEditingId}
            todo={todo}
            setTodo={setTodo}
            item={item}
          ></EditInput>
        ) : (
          <label
            className="form-check-label me-auto"
            htmlFor={`todo-${item.id}`}
          >
            <span
              className={`${
                item.completed ? "text-decoration-line-through text-muted" : ""
              }`}
            >
              {item.text}
            </span>
          </label>
        )}
        <button
          className="border-0 bg-white me-2 bi bi-pencil-square"
          onClick={() => {
            setEditingId(item.id);
            // setEditText(item.text);
          }}
          // 完成任務後不得在編輯內文
          disabled={item.completed}
        ></button>
        <button
          className="border-0 bg-white bi bi-trash-fill"
          onClick={() => handleDelete(item.id)}
        ></button>
      </li>
    </div>
  );
};

export default TodoItems;
