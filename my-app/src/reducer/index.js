
import { combineReducers } from "redux";
import userData from "./userData";
import isAuth from "./isAuth";
import horoscopeState from "./horoscopeState";
import checkoutServiceState from "./checkoutServiceState";
import transitionSaveState from "./transitionSaveState";
import priceData from "./priceData";
import userloggedIn from "./userloggedIn";
import messageArray from "./messageArray";
import stopChatx2 from "./stopChatx2";
import chatData from "./chatData";
import timeLeft from "./timeLeft";
import aviaibleBalance from "./availbleBalance";
const rootReducer=combineReducers({
    isAuth,
    messageArray,
    horoscopeState,timeLeft,
    stopChatx2,
    aviaibleBalance,
    checkoutServiceState,
    transitionSaveState,chatData,
    userloggedIn,
    userData,
priceData
    })

export default  rootReducer;