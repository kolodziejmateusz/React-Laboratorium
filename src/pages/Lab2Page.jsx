import { useParams } from "react-router-dom";
import Licznik from "../components/Licznik.jsx";
import TodoList from "../components/TodoList.jsx";
import TodoApp from "../components/TodoApp.jsx";
import { useContext } from "react";
import AppContext from "../data/AppContext";

function Lab2Page() {
  const { id } = useParams();
  const context = useContext(AppContext);
  const data = context.items;
  const person = data.find((person) => person.id == id);

  if (!id) {
    return (
      <>
        <h1>Profil osoby</h1>
        <h2>Brak identyfikatora osoby.</h2>
      </>
    );
  }

  if (!person) {
    return (
      <>
        <h1>Profil osoby</h1>
        <h2>Nie znaleziono osoby o identyfikatorze: {id}.</h2>
      </>
    );
  }

  return (
    <>
      <h1>Profil osoby</h1>
      <h2>Imię: {person.name}</h2>
      <h3>Data urodzenia: {person.birth}</h3>
      <h4>Kolor oczu: {person.eyes}</h4>
      <Licznik />
      <hr />
      <TodoList />
      <hr />
      <TodoApp />
    </>
  );
}

export default Lab2Page;
