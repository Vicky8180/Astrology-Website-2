

const initialState = [];


const messageArray = (state = initialState, action) => {
  switch (action.type) {
    case 'messagearray':
     
        const data=action.payload
       console.log(action.payload)
       console.log(state)
      return [...state, ...data];
    default:
    
      return state;
  }
};

export default messageArray;
