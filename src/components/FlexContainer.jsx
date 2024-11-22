import { useContext } from "react";
import AppContext from "../data/AppContext";
import { useNavigate } from "react-router-dom";

const FlexContainer = ({ element }) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const data = context.items;
  return (
    <div className="d-flex flex-wrap mt-3">
      {data.map((e) => element({ ...e, dispatch, navigate }))}
    </div>
  );
};

export default FlexContainer;
