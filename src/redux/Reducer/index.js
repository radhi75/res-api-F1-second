import { combineReducers } from "redux";
import personreducer from "./personreducer";

const rootreducer = combineReducers({ personreducer });
export default rootreducer;
