const FlexContainer = ({ element: Element, data }) => {
  return (
    <div className="d-flex flex-wrap">
      {data.map((person) => (
        <Element key={person.id} person={person} className="m-3" />
      ))}
    </div>
  );
};

export default FlexContainer;
