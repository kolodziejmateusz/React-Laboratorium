export default function AppReducer(state, action) {
  switch (action.type) {
    case "edit":
      console.log("Edit action payload:", action.payload);

      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );

    case "rate": {
      console.log("Rate");
      const item = state.find((i) => i.id === action.id);
      item.rating = action.rating;
      return [...state];
    }

    case "delete":
      console.log("Delete");
      return state.filter((i) => i.id !== action.id);

    case "add":
      console.log("Add", action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
}
