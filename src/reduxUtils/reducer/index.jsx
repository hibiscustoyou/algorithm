/*
* 创建 reducer
*/

import { combineReducers } from 'redux';
import { HOME_PATH} from "../action-types";


const homeKey = (state={}, action) => {
    // console.log('homeKey', action.payload)
    switch (action.type) {
        case HOME_PATH:
            return action.payload
        default:
            return state
    }
}

/*
* 创建全局根 reducer
*/
export const rootReducer = combineReducers({
    // 利用 combineReducers 方法管理多 reducer，使用规范如下
    home_key: homeKey
})