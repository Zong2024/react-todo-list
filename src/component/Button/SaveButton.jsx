const SaveButton = ({ todo, saveEdit }) => {
  return (
    <button
      className="border-0 bg-white bi bi-floppy-fill"
      onClick={() => saveEdit(todo.id)}
    ></button>
  );
};

export default SaveButton;
