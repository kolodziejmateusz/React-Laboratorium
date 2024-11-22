import { Button, Form, FormControl } from "react-bootstrap";
import { useState, useContext } from "react";
import AppContext from "../data/AppContext";
import { PersonProfile } from "../components/PersonProfile.jsx";

const nameField = "name";
const birthField = "birth";
const eyesField = "eyes";
const ratingField = "rating";

function CreateForm() {
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);

  // const { dispatch } = useContext(AppContext); // Użycie kontekstu
  const context = useContext(AppContext);
  const data = context.items;
  const dispatch = context.dispatch;

  const validate = (data) => {
    const newErrors = [];

    if (!data.get(nameField) || data.get(nameField).length < 3) {
      newErrors.push("Name must be at least 3 characters long.");
    }

    const birthRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthRegex.test(data.get(birthField))) {
      newErrors.push("Birth date must be in YYYY-MM-DD format.");
    }

    const validEyesColors = ["blue", "green", "gray", "brown"];
    if (!validEyesColors.includes(data.get(eyesField))) {
      newErrors.push("Eyes color must be one of: blue, green, gray, brown.");
    }

    const rating = parseInt(data.get(ratingField), 10);
    if (isNaN(rating) || rating < 1 || rating > 10) {
      newErrors.push("Rating must be an integer between 1 and 10.");
    }

    return newErrors;
  };

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const newErrors = validate(data);
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setSending(true);

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Symulacja opóźnienia
    setSending(false);

    const newItem = {
      id: Date.now(),
      name: data.get(nameField),
      birth: data.get(birthField),
      eyes: data.get(eyesField),
      rating: parseInt(data.get(ratingField), 10),
    };

    dispatch({ type: "add", payload: newItem });

    for (let key of data.keys()) {
      e.target[key].value = "";
    }
  };

  return (
    <>
      <h1>Register</h1>

      <div className="text-danger">
        {errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      <Form className="text-primary" onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={nameField}>Name</Form.Label>
          <FormControl
            required
            id={nameField}
            name={nameField}
            minLength={3}
            placeholder="Enter your name"
          />
          <Form.Text className="text-muted">Minimum 3 characters.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={birthField}>Birth Date</Form.Label>
          <FormControl
            required
            id={birthField}
            name={birthField}
            type="date"
            placeholder="YYYY-MM-DD"
          />
          <Form.Text className="text-muted">Format: YYYY-MM-DD.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={eyesField}>Eye Color</Form.Label>
          <FormControl
            required
            id={eyesField}
            name={eyesField}
            placeholder="Enter your eye color"
          />
          <Form.Text className="text-muted">
            One of: blue, green, gray, brown.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={ratingField}>Rating</Form.Label>
          <FormControl
            required
            id={ratingField}
            name={ratingField}
            type="number"
            min={1}
            max={10}
            placeholder="Rate from 1 to 10"
          />
          <Form.Text className="text-muted">
            A number between 1 and 5.
          </Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button
            disabled={isSending}
            type="submit"
            variant="outline-primary"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </Form>
      {data.map((person) => (
        <PersonProfile key={person.id} person={person} />
      ))}
    </>
  );
}

export default CreateForm;
