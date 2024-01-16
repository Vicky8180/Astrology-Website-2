

const initialState = [];

const checkoutServiceState = (state = initialState, action) => {
  switch (action.type) {
    case "checkoutservicestate":
      return [action.payload]; 
    
    default:
      return state;
  }
};

export default checkoutServiceState;

