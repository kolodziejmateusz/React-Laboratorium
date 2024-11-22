import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../data/AppContext";
import EditForm from "./EditForm";

function EditFormWrapper() {
  const { id } = useParams();
  const { items } = useContext(AppContext);

  const itemToEdit = items.find((item) => item.id === parseInt(id, 10));

  if (!itemToEdit) {
    return <p className="text-danger">Item not found</p>;
  }

  return <EditForm defaultValues={itemToEdit} />;
}

export default EditFormWrapper;
