import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
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
      />
      <button>Add</button>
    </form>
  );
};