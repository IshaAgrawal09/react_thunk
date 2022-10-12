import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./Reducer";
// import cake_Reducer

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
