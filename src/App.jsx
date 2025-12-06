import { useEffect, useRef, useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (editingId !== null) {
      inputRef.current?.focus();
    }
  }, [editingId]);

  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodo((prev) => [
        { id: Date.now(), text: task.trim(), completed: false },
        ...prev,
      ]);

      setTask("");
    }
  };

  const handleDelete = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const handleEdit = (id) => {
    if (editText.trim()) {
      const newTodo = todo.map((item) =>
        item.id === id ? { ...item, text: editText.trim() } : item
      );
      setTodo(newTodo);
      setEditingId(null);
      setEditText("");
    } else {
      // 忽略空編輯動作，直接退出不更動內文
      setEditingId(null);
      setEditText("");
    }
  };

  const handleToggleComplete = (id) => {
    const toggleComplete = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(toggleComplete);
  };

  return (
    <>
      <div className="container ">
        <h1 className="text-center my-5">Todo-List</h1>
        <div className="row justify-content-center ">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={addTodo}>
                  <div className="input-group">
                    <input
                      value={task}
                      type="text"
                      className="form-control"
                      placeholder="輸入新任務..."
                      onChange={(e) => setTask(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      新增
                    </button>
                  </div>
                </form>

                <ul className="list-group mt-4">
                  {todo.map((item) => (
                    <li className="d-flex fs-4 mt-2" key={item.id}>
                      <div className="form-check me-3">
                        {/* {checkbox} */}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`todo-${item.id}`}
                          checked={item.completed}
                          onChange={() => handleToggleComplete(item.id)}
                        />
                      </div>
                      {editingId === item.id ? (
                        <input
                          ref={inputRef}
                          value={editText}
                          type="text"
                          className="form-control"
                          onChange={(e) => setEditText(e.target.value)}
                          onBlur={() => setEditingId(null)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleEdit(item.id);
                            } else if (e.key === "Escape") {
                              setEditingId(null);
                              setEditText("");
                            }
                          }}
                        />
                      ) : (
                        <label
                          className="form-check-label me-auto"
                          htmlFor={`todo-${item.id}`}
                        >
                          <span
                            className={`${
                              item.completed
                                ? "text-decoration-line-through text-muted"
                                : ""
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
                          setEditText(item.text);
                        }}
                        // 完成任務後不得在編輯內文
                        disabled={item.completed}
                      ></button>
                      <button
                        className="border-0 bg-white bi bi-trash-fill"
                        onClick={() => handleDelete(item.id)}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
