
const initialState = [];


const chatData = (state = initialState, action) => {
  switch (action.type) {
    case 'chatdata':
            console.log(action.payload)
      return [...state, action.payload];
    default:
    
      return state;
  }
};

export default chatData;
