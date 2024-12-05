import { applyMiddleware, createStore } from "redux";
import redurces from "./redurces";
import {thunk} from 'redux-thunk';


// export const store = configureStore(redurces, {}, applyMiddleware(thunk));
export const store = createStore(redurces, {}, applyMiddleware(thunk));