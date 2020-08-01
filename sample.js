const streamReducer = (state = [], action) => {
  switch (action.type) {
    case "EDIT_STREAM":
      return state.map((s) => {
        if (s.id === action.payload.id) {
          return action.payload;
        } else {
          return s;
        }
      });
    default:
      return state;
  }
};

const streamReducer2 = (state = {}, action) => {
  switch (action.type) {
    case "EDIT":
    //   const newState = { ...state };
    //   newState[action.payload.id] = action.payload;
    //   return newState;
    return {...state, [action.payload.id]: action.payload}
    default:
      return state;
  }
};
