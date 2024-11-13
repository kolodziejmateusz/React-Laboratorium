import { Card } from "react-bootstrap";
import { data } from "../data/module-data.js";
import FlexContainer from "../components/FlexContainer.jsx";
import { PersonProfile } from "../components/PersonProfile.jsx";

const Item = ({ person, className }) => (
  <Card style={{ width: "18rem" }} className={`border mb-3 p-3 ${className}`}>
    <Card.Body>
      <PersonProfile person={person} />
    </Card.Body>
  </Card>
);

function Lab3Page() {
  return <FlexContainer element={Item} data={data} />;
}

export default Lab3Page;
