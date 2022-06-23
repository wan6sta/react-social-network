const SET_POSTS = 'SET_POSTS'
const SET_POST_TEXT_NOW = 'SET_POST_TEXT_NOW'


const initialState = {
  posts: [],
  postTextNow: '',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, {id: 3, text: state.postTextNow, likes: 13343423}],
        postTextNow: ''
      }

    case SET_POST_TEXT_NOW:
      return {
        ...state,
        postTextNow: action.text
      }

    default: {
      return state
    }
  }
}

export const setPosts = () => {
  return {type: SET_POSTS}
}

export const setPostTextNow = (text) => {
  return {type: SET_POST_TEXT_NOW, text}
}
