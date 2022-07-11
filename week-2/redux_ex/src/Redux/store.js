import {createStore, combineReducers} from "redux";
//createStore 줄 그인 이유 : deprecated -> 오래되어서 이제 사용하지 않을 거니까 다른 거 쓸래?
import cat from "./modules/cat";
//만들어준 cat 모듈 import


const rootReducer = combineReducers({cat});
//만든 모듈 넣어주기

const store = createStore(rootReducer);
//store : 리듀서와 createStore를 (미들웨어 있으면 미들웨어까지) 엮어준다.

export default store;