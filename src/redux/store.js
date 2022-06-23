import {combineReducers, legacy_createStore} from "redux";

import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  profileReducer,
  messagesReducer,
  usersReducer,
})

export const store = legacy_createStore(reducers);




