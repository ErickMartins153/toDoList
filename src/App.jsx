import { useEffect, useState } from "react";
import { ListTodo } from "./ListTodo";
import { TodoForm } from "./TodoForm";

import "./index.css";

export const App = () => {
  const [todos, setTodos] = useState(() => {
    const cache = localStorage.getItem("TODOS");
    if (cache === null) return [];
    return JSON.parse(cache);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos([...todos, { id: crypto.randomUUID(), title, completed: false }]);
  }

  function deleteTodo(id) {
    return setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function checkTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  return (
    <>
      <div className="container">
        <div className="todo-section todoForm">
          <h1>To-do App</h1>
          <TodoForm addTodo={addTodo} />
          <ul>
            {todos.filter((todo) => !todo.completed).length === 0 && "No Todos"}
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => {
                return (
                  <ListTodo
                    id={todo.id}
                    title={todo.title}
                    deleteTodo={deleteTodo}
                    completed={todo.completed}
                    checkTodo={checkTodo}
                    key={todo.id}
                  />
                );
              })}
          </ul>
        </div>
        <div className="todo-section">
          <h1>Completed</h1>
          <ul>
            {todos.filter((todo) => todo.completed).length === 0 &&
              "No completed Todos"}

            {todos.map((todo) => {
              if (todo.completed) {
                return (
                  <ListTodo
                    id={todo.id}
                    title={todo.title}
                    deleteTodo={deleteTodo}
                    completed={todo.completed}
                    checkTodo={checkTodo}
                    key={todo.id}
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
