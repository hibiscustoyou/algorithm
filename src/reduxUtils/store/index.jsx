import {createStore} from "redux";
import {rootReducer} from "../reducer";

export default createStore(
    rootReducer,
    // 启动 redux devTools 调试
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
