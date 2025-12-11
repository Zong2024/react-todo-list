import { useState } from "react";
import TodoItems from "./component/TodoItems";
import InputTask from "./component/InputTask";
import FilterSelect from "./component/FilterSelect";

function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterState, setFilterState] = useState("all");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      setTodos((prev) => [
        { id: Date.now(), text: newTaskText.trim(), completed: false },
        ...prev,
      ]);

      setNewTaskText("");
    }
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filterTodos = () => {
    switch (filterState) {
      case "completed":
        return todos.filter((item) => item.completed === true);
      case "uncompleted":
        return todos.filter((item) => item.completed === false);
      default:
        return todos;
    }
  };

  return (
    <>
      <div className="container ">
        <h1 className="text-center my-5">Todo-List</h1>
        <div className="row justify-content-center ">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <InputTask
                  addTodo={addTodo}
                  newTaskText={newTaskText}
                  setNewTaskText={setNewTaskText}
                ></InputTask>

                <ul className="list-group mt-4">
                  {todos.length < 1 ? (
                    <h4 className="text-center">目前沒有任務</h4>
                  ) : (
                    <>
                      <FilterSelect
                        filterState={filterState}
                        setFilterState={setFilterState}
                      ></FilterSelect>

                      {filterTodos().map((todo) => (
                        <TodoItems
                          key={todo.id}
                          todo={todo}
                          onUpdate={updateTodo}
                          onDelete={deleteTodo}
                          onToggle={toggleCompleted}
                        ></TodoItems>
                      ))}
                    </>
                  )}
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
