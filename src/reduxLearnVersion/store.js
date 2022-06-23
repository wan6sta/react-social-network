import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";

const store = {
  _state: {
    profile: {
      posts: [],
      postTextNow: '',
    },
    messages: {
      messages: [],
      messageTextNow: '',
    },
  },
  getState() {
    return this._state;
  },

  _callSubscriber: null,
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profile, action);
    messagesReducer(this._state.messages, action);

    this._callSubscriber();
  },
}

export default store;