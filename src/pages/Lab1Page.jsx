import { PersonProfile } from "../components/PersonProfile.jsx";
import { useContext } from "react";
import AppContext from "../data/AppContext";

function Lab1Page() {
  const context = useContext(AppContext);
  const data = context.items;
  return (
    <>
      <h1>Laboratorium 1</h1>
      {data.map((person) => (
        <PersonProfile key={person.id} person={person} />
      ))}
    </>
  );
}

export default Lab1Page;
