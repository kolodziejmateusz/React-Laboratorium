import { Card } from "react-bootstrap";
import { PersonProfile } from "../components/PersonProfile.jsx";

function ProfileCard({ person, className }) {
  return (
    <Card style={{ width: "18rem" }} className={`border mb-3 p-3 ${className}`}>
      <Card.Body>
        <PersonProfile person={person} />
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
