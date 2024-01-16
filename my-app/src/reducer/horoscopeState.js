const initialState = [];

const horoscopeState = (state = initialState, action) => {
  switch (action.type) {
    case "horoscopestate":
      if (state.length === 0) {
        // Check if state is empty, if true, update state with payload
        return action.payload;
      }
      // If state already has data, return the existing state
      console.log(state)
      return state;
    default:
      return state;
  }
};

export default horoscopeState;
