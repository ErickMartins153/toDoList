// eslint-disable-next-line react/prop-types
export const ListTodo = ({ title, completed, id, deleteTodo, checkTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        name=""
        checked={completed}
        onChange={(e) => checkTodo(id, e.target.checked)}
      />
      <h2>{title}</h2>
      <button className="delete" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};
