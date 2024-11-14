import { Card } from "react-bootstrap";

function ProfileCard({ id, name, rating, eyes }) {
  return (
    // const [rate, setRate] = useState(rating)

    <Card style={{ width: "18rem" }} className={`border mb-3 p-3`}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Body>
          {id},{eyes},{rating}
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
