const initialState = false; 

const stopChatx2 = (state = initialState, action) => {
  switch (action.type) {
    case "stopchatx2":
        console.log(action.payload)
      return action.payload; 
    default:
      return state;
  }
};

export default stopChatx2;
