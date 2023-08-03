export const ListTodo = (todo) => {
  return (
    <li>
      <input type="checkbox" name="" checked={todo.completed} />
      <h2>{todo.title}</h2>
      <button className="delete">Delete</button>
    </li>
  );
};
