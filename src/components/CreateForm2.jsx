import { useState } from "react";

function CreateForm2() {
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (
      data.get("name").charAt(0) !== data.get("name").charAt(0).toUpperCase()
    ) {
      setErrors([...errors, "Nazwa musi zaczynać się od wielkiej litery!"]);
    }

    if (errors.length != 0) {
      return;
    }

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // fetch, axios itd.
    // dispatch({
    //     type: "add",
    //     data: // obiekt z danymi z formularza
    // })
    setSending(false);
    for (let key of data.keys()) {
      e.target[key] = "";
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Nazwa</label>
        <input
          required
          minLength="3"
          maxLength="12"
          name="name"
          type="text"
          id="name"
          placeholder="Wpisz nazwe"
        />
        <button type="submit" disabled={isSending}>
          Zapisz
        </button>
        <button type="reset">Wyczyść</button>
      </form>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CreateForm2;
