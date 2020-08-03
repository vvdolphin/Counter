import {createStore} from "redux";
import reducer from "../reducer/count";
let store = createStore(reducer);
export default store;