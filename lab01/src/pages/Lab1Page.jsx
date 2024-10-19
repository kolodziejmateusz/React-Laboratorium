// const NameItem = ({name, id}) => <li key={id}>{name}</li>
// import {names} from '../data/module-data'

import { data } from "../data/module-data.js";
import { PersonProfile } from "../components/PersonProfile.jsx";

function Lab1Page() {
  return (
    <>
      <h1>Laboratorium 1</h1>
      {data.map((person) => (
        <PersonProfile key={person.id} person={person} />
      ))}
      {/* tu co było na lab1 */}
    </>
  );
}

export default Lab1Page;
