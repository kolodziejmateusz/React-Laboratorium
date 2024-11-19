import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build an app"]);

  const addTodo = () => {
    setTodos([...todos, "New Task"]); // Dodanie nowego elementu do tablicy
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
