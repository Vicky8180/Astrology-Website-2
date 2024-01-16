const initialState=0;
const timeLeft =(state = initialState, action)=>{


    switch (action.type) {
        case "timeleft":
            console.log(action.payload)
          return action.payload; 
        default:
          return state;
      }

}
export default timeLeft;