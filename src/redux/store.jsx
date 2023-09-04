import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { reducers } from "./reducers/combineReducer";

export const store = createStore(reducers, composeWithDevTools());
