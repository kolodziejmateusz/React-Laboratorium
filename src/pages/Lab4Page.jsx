import { useNavigate } from "react-router-dom";

function Lab4Page() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={(e) => navigate("/lab4/add")}>Dodaj</button>
    </>
  );
}

export default Lab4Page;

// formularz do dodawania dokończyć
// zrobić formularz do edycji
// jakaś strona do robirnia formularzy
