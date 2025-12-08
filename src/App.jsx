import { useState } from "react";
import TodoItems from "./page/TodoItems";
import InputTask from "./page/InputTask";

function App() {
  const [todo, setTodo] = useState([]);

  const [filterState, setFilterState] = useState("all");

  const filterTodo = () => {
    switch (filterState) {
      case "completed":
        return todo.filter((item) => item.completed === true);
      case "uncompleted":
        return todo.filter((item) => item.completed === false);
      default:
        return todo;
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
                <InputTask setTodo={setTodo}></InputTask>

                <ul className="list-group mt-4">
                  {todo.length < 1 ? (
                    <h4 className="text-center">目前沒有任務</h4>
                  ) : (
                    <>
                      <div className="my-4">
                        <label htmlFor="filter-select">Status</label>
                        <select
                          className="form-select mt-1"
                          value={filterState}
                          id="filter-select"
                          onChange={(e) => {
                            setFilterState(e.target.value);
                          }}
                        >
                          <option value="all">全部</option>
                          <option value="completed">已完成</option>
                          <option value="uncompleted">未完成</option>
                        </select>
                      </div>

                      {filterTodo().map((item) => (
                        <TodoItems
                          key={item.id}
                          item={item}
                          setTodo={setTodo}
                          todo={todo}
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
