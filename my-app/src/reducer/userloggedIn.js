const initialState = false;

const userloggedIn = (state = initialState, action) => {
  switch (action.type) {
    case "userloggedin":
      return action.payload; 
    default:
      return state;
  }
};

export default userloggedIn;
