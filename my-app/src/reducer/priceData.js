
const initialState = {};

const priceData = (state = initialState, action) => {
  switch (action.type) {
    case "pricedata":
      return action.payload; 
    
    default:
      return state;
  }
};

export default priceData;

