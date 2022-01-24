import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { MainReducer } from "./MainReducer";
import { AuthorizationReducer } from "./AuthorizationReducer";
import { ProfileReducer } from "./ProfileReducer";
export let reducer = combineReducers({
    MainReducer,
    AuthorizationReducer,
    ProfileReducer
});




let store = createStore(reducer, applyMiddleware(thunk));
export default store;