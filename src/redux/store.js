const SET_POSTS = 'SET_POSTS';
const SET_POST_TEXT_NOW = 'SET_POST_TEXT_NOW';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_MESSAGE_TEXT_NOW = 'SET_MESSAGE_TEXT_NOW';

const store = {
  _state: {
    posts: [],
    postTextNow: '',

    messages: [],
    messageTextNow: '',
  },
  _render: null,

  subscribe(observer) {
    this._render = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    switch (action.type) {
      case SET_POSTS:
        this._state.posts.push({
          id: 5,
          text: this._state.postTextNow,
          likes: 0,
        })
        this._state.postTextNow = '';
        this._render();
        break;

      case SET_POST_TEXT_NOW:
        this._state.postTextNow = action.text;
        this._render();
        break

      case SET_MESSAGES:
        this._state.messages.push({
          id: 5,
          text: this._state.messageTextNow,
        })
        this._state.messageTextNow = '';
        this._render();
        break;

      case SET_MESSAGE_TEXT_NOW:
        this._state.messageTextNow = action.text;
        this._render();
        break

      default:
        break
    }
  },
}

export const setPosts = () => ({type: SET_POSTS})
export const setPostTextNow = (text) => ({type: SET_POST_TEXT_NOW, text})
export const setMessages = () => ({type: SET_MESSAGES})
export const setMessageTextNow = (text) => ({type: SET_MESSAGE_TEXT_NOW, text})

export default store;