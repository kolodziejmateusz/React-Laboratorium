import { useReducer } from "react";
import AppReducer from "../data/AppReducer";

const FlexContainer = ({ element, data }) => {
  const [items, dispatch] = useReducer(AppReducer, data);
  return (
    <div className="d-flex flex-wrap mt-3">
      {items.map((e) => element({ ...e, dispatch }))}
    </div>
  );
};

export default FlexContainer;
