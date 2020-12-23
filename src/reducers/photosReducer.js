const photosReducer = (state = [], action) => {
  switch (action.type) {
    case "PHOTOS":
      return (state = action.payload);
    default:
      return state;
  }
};
export default photosReducer;
