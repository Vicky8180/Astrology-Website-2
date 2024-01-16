const initialState=0;
const aviaibleBalance =(state = initialState, action)=>{


    switch (action.type) {
        case "availblebalance":
            console.log(action.payload)
          return action.payload; 
        default:
          return state;
      }
     


}
export default aviaibleBalance;