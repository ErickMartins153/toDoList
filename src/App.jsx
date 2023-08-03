import { useState } from "react";
import { ListComponent } from "./ListComponent";
import { TodoForm } from "./TodoForm";

import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos([...todos, { id: crypto.randomUUID(), title, completed: false }]);
  }
  return (
    <>
      <div className="container">
        <h1>To-do App</h1>
        <TodoForm onSubmit={addTodo} />
        <ul>
          {todos.length === 0 && "No Todos"}
          {todos.map((todo) => {
            return <ListComponent title={todo.title} key={todo.id} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
