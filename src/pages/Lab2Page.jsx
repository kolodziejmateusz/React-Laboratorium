import { data } from "../data/module-data";
import { useParams } from "react-router-dom";
import Licznik from "../components/Licznik.jsx";
import TodoList from "../components/TodoList.jsx";

function Lab2Page() {
  const { id } = useParams();
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
      <TodoList />
    </>
  );
}

export default Lab2Page;
