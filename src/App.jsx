import { useState } from "react";
import { ListComponent } from "./ListComponent";

import "./index.css";

function App() {
  const [newItem, setNewItem] = useState("");
  return (
    <>
      <div className="container">
        <h1>To-do App</h1>
        <form>
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
          <ListComponent />
        </ul>
      </div>
    </>
  );
}

export default App;
