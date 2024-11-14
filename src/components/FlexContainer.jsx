const FlexContainer = ({ element, data }) => {
  return (
    <div className="d-flex flex-wrap mt-3">
      {data.map((e) => element({ ...e }))}
    </div>
  );
};

export default FlexContainer;
