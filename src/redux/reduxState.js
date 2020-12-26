import {createStore, combineReducers, applyMiddleware} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    dialogsPage : dialogsReducer, 
    profilePage : profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app : appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;