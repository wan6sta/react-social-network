import {combineReducers, legacy_createStore} from "redux";

import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";

const reducers = combineReducers({
  profileReducer,
  messagesReducer,
  usersReducer,
  authReducer
})

export const store = legacy_createStore(reducers);




