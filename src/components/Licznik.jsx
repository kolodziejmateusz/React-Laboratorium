import { useReducer } from "react";

// Definicja funkcji redukującej
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Licznik() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // useReducer(reducer, initialState)

  return (
    <div>
      <p>Kliknięto {state.count} razy</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Licznik;
