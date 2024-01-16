const initialState = false; 

const isAuth = (state = initialState, action) => {
  switch (action.type) {
    case "isauth":
      return action.payload; 
    default:
      return state;
  }
};

export default isAuth;
