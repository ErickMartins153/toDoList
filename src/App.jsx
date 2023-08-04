import { useState } from "react";
import { ListTodo } from "./ListTodo";
import { TodoForm } from "./TodoForm";

import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos([...todos, { id: crypto.randomUUID(), title, completed: false }]);
  }

  function deleteTodo(id) {
    return setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <div className="container">
        <h1>To-do App</h1>
        <TodoForm onSubmit={addTodo} />
        <ul>
          {todos.length === 0 && "No Todos"}
          {todos.map((todo) => {
            return (
              <ListTodo
                id={todo.id}
                title={todo.title}
                deleteTodo={deleteTodo}
                completed={todo.completed}
                key={todo.id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
