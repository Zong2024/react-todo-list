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
    const newText = editText.trim();
    if (newText === todo.text || !newText) {
      setIsEditing(false);
      setEditText("");
      return;
    }

    if (newText) {
      onUpdate(id, newText);
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
    </>
  );
};

export default TodoItems;
