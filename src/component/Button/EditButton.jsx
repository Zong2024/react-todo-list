const EditButton = ({ todo, startEdit }) => {
  return (
    <button
      className="border-0 bg-white ms-auto bi bi-pencil-square"
      onClick={() => {
        startEdit(todo.text);
      }}
      // 完成任務後不得在編輯內文
      disabled={todo.completed}
    ></button>
  );
};

export default EditButton;
