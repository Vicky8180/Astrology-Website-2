const initialState = false;

const userloggedIn = (state = initialState, action) => {
  switch (action.type) {
    case "userloggedin":
      return action.payload; // Return the new state instead of modifying the existing state
    default:
      return state;
  }
};

export default userloggedIn;
