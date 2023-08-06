import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    let count = 0;
    for (let i = 0; i < newItem.length; i++) {
      if (newItem[i] === " ") {
        count++;
      }
    }
    if (count === newItem.length) return;
    setNewItem("");
    addTodo(newItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="insert-to-do"></label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="insert-to-do"
        name="To-do"
        placeholder="Insert a to-do item"
        maxLength="60"
        autoComplete="off"
      />
      <button>Add</button>
    </form>
  );
};
