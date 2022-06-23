const SET_POSTS = 'SET_POSTS';
const SET_POST_TEXT_NOW = 'SET_POST_TEXT_NOW';

export const profileReducer = (state, action) => {
  switch (action.type){
    case SET_POSTS: {
      state.posts.push({
        id: 5,
        text: state.postTextNow,
        likes: 0,
      })
      state.postTextNow = '';

      return state
    }

    case SET_POST_TEXT_NOW: {
      return state.postTextNow = action.text;
    }

    default: {
      return state;
    }
  }
}

export const setPosts = () => ({type: SET_POSTS})
export const setPostTextNow = (text) => ({type: SET_POST_TEXT_NOW, text})