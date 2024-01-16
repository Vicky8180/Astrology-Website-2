const initialState = []; 

const transitionSaveState= (state = initialState, action) => {
  switch (action.type) {
    case "transitionsavestate":
      return [...action.payload]; 
    default:
      return state;
  }
};

export default transitionSaveState;
