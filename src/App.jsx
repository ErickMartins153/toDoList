import { useState } from "react";
import { ListComponent } from "./ListComponent";

import "./index.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  }
  return (
    <>
      <div className="container">
        <h1>To-do App</h1>
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
        <ul>
          {todos.map((todo) => {
            return <ListComponent title={todo.title} key={todo.id} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
