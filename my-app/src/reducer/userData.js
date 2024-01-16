
const initialState = [];


const userData = (state = initialState, action) => {
  switch (action.type) {
    case 'userdata':
     
      return [...state, action.payload];
    default:
    
      return state;
  }
};

export default userData;
