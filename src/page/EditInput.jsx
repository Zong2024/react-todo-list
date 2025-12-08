import { useEffect, useRef, useState } from "react";

const EditInput = ({ todo, setTodo, item, editingId, setEditingId }) => {
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (editingId !== null) {
      inputRef.current?.focus();
    }
  }, [editingId]);

  const inputRef = useRef(null);

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

  return (
    <>
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
    </>
  );
};

export default EditInput;
