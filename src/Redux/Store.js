import { createStore } from "redux";
import {rootReducer} from "./todo-reducer/root-reducer"

const store=createStore(rootReducer)

export default store