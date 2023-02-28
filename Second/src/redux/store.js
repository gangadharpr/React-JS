import { messageReducer } from "./Message/message.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

let store=createStore(messageReducer,composeWithDevTools())

export {store}  