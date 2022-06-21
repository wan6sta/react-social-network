const store = {
  _state: {
    posts: [],
    postTextNow: '',
  },
  _render: null,

  subscribe(observer) {
    this._render = observer;
  },

  getState() {
    return this._state;
  },

  setPosts() {
    this._state.posts.push({
      id: 5,
      text: this._state.postTextNow,
      likes: 0,
    })
    this._state.postTextNow = '';
    this._render();
  },

  setPostTextNow(text) {
    this._state.postTextNow = text;
    this._render();
  }
}

export default store;