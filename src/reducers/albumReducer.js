const albumReducer = (state = [], action) => {
  switch (action.type) {
    case "ALBUM":
      return (state = action.payload);
    default:
      return state;
  }
};
export default albumReducer;
