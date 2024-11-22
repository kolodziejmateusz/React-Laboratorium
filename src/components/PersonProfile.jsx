export const PersonProfile = (props) => (
  <ul>
    <li>Id: {props.person.id}</li>
    <li>Imię: {props.person.name}</li>
    <li>Data urodzenia: {props.person.birth}</li>
    <li>Kolor oczu: {props.person.eyes}</li>
    <li>Ocena: {props.person.rating}</li>
  </ul>
);
