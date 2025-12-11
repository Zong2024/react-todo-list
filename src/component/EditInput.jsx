import { useEffect, useRef } from "react";

const EditInput = ({
  todo,
  saveEdit,
  cancelEdit,
  editText,
  setEditText,
  isEditing,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <>
      <input
        ref={inputRef}
        value={editText}
        type="text"
        className="form-control"
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveEdit(todo.id);
          } else if (e.key === "Escape") {
            cancelEdit();
          }
        }}
      />
    </>
  );
};

export default EditInput;
