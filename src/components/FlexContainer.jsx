import { useContext } from "react";
import AppContext from "../data/AppContext";

const FlexContainer = ({ element }) => {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const data = context.items;
  return (
    <div className="d-flex flex-wrap mt-3">
      {data.map((e) => element({ ...e, dispatch }))}
    </div>
  );
};

export default FlexContainer;
