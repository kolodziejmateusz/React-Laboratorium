// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { data } from "./data/module-data.js";
// import { PersonProfile } from "./components/PersonProfile.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Lab1Page from "./pages/Lab1Page.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <p>
          <strong>Name:</strong> {data[0].name}
        </p>
        <p>
          <strong>Birthdate:</strong> {data[0].birth}
        </p>
        <p>
          <strong>Eye Color:</strong> {data[0].eyes}
        </p>
      </p> */}

      <RootLayout>
        <Routes>
          <Route path="/lab1" element={<Lab1Page />} />
          <Route path="/lab2" element={<h1>Laboratorium 2</h1>} />
        </Routes>
      </RootLayout>
      {/* <PersonProfile person={data[0]} />
      <PersonProfile person={data[10]} />
      <PersonProfile person={data[50]} /> */}
      {/* {data.map((person) => (
        <PersonProfile key={person.id} person={person} />
      ))} */}
    </>
  );
}

export default App;
