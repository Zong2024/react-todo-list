import { useState } from "react";

const InputTask = ({ setTodo }) => {
  const [task, setTask] = useState("");

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
  return (
    <>
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
    </>
  );
};

export default InputTask;
