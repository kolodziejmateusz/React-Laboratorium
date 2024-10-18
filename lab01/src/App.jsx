import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {data} from '../module-data.js';
import { PersonProfile } from './components/PersonProfile.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <p><strong>Name:</strong> {data[0].name}</p>
        <p><strong>Birthdate:</strong> {data[0].birth}</p>
        <p><strong>Eye Color:</strong> {data[0].eyes}</p>
      </p>
      
      <PersonProfile person={data[0]}/>
      <PersonProfile person={data[10]}/>
      <PersonProfile person={data[50]}/>
    </>
  )
}

export default App
