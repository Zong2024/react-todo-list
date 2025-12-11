const DeleteButton = ({ todo, deleteTask }) => {
  return (
    <>
      <button
        className="border-0 bg-white bi bi-trash-fill "
        onClick={() => deleteTask(todo.id)}
      ></button>
    </>
  );
};

export default DeleteButton;
