import { Button, Card } from "react-bootstrap";
// import { useState } from "react";
import RatingBar from "./RatingBar";

function ProfileCard({ id, name, eyes, birth, rating, dispatch, navigate }) {
  // const [rate, setRate] = useState(rating);
  return (
    <Card
      key={id}
      style={{ width: "18rem" }}
      className={`border mb-3 mx-3 p-2`}
    >
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <p>id: {id}</p>
        <p>data urodzenia: {birth}</p>
        <p>kolor oczu: {eyes}</p>
      </Card.Body>
      <RatingBar rate={rating} />
      <div className="d-flex justify-content-around mt-3">
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/lab4/edit/${id}`);
          }}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            dispatch({
              type: "delete",
              id: id,
            });
          }}
        >
          Delete
        </Button>
        <Button
          variant="success"
          onClick={() => {
            // setRate((rating + 1) % 11);
            dispatch({
              type: "rate",
              rating: (rating + 1) % 11,
              id: id,
            });
          }}
        >
          Rate
        </Button>
      </div>
    </Card>
  );
}

export default ProfileCard;
