import { createStore } from "react-redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;
