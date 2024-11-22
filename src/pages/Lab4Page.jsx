import { useNavigate } from "react-router-dom";

function Lab4Page() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/lab4/add")}>Dodaj</button>
    </>
  );
}

export default Lab4Page;
