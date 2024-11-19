import { useReducer } from "react";

// Reducer
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => {
    dispatch({ type: "add", text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggle", id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "remove", id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value) {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
        placeholder="Add a todo"
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
