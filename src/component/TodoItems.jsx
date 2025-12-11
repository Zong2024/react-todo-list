import EditInput from "./EditInput";
import DeleteButton from "./Button/DeleteButton";
import { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import EditButton from "./Button/EditButton";
import SaveButton from "./Button/SaveButton";

const TodoItems = ({ todo, onUpdate, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const startEdit = (text) => {
    setIsEditing(true);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      onUpdate(id, editText.trim());
      setIsEditing(false);
      setEditText("");
    } else {
      // 忽略空編輯動作，直接退出不更動內文
      setIsEditing(false);
      setEditText("");
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditText("");
  };
  const deleteTask = (id) => {
    onDelete(id);
  };

  return (
    <>
      <li className="d-flex fs-4 mt-2">
        {!isEditing ? (
          <>
            <TodoDisplay todo={todo} onToggle={onToggle}></TodoDisplay>
            <EditButton todo={todo} startEdit={startEdit}></EditButton>
            <DeleteButton todo={todo} deleteTask={deleteTask}></DeleteButton>
          </>
        ) : (
          <>
            <EditInput
              todo={todo}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              editText={editText}
              setEditText={setEditText}
              isEditing={isEditing}
            ></EditInput>
            <SaveButton todo={todo} saveEdit={saveEdit}></SaveButton>
            <DeleteButton todo={todo} deleteTask={deleteTask}></DeleteButton>
          </>
        )}
      </li>
    </>
  );
};

export default TodoItems;
