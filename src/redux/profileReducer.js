const SET_POSTS = 'SET_POSTS'
const SET_POST_TEXT_NOW = 'SET_POST_TEXT_NOW'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'

const initialState = {
  posts: [],
  postTextNow: '',
  profileInfo: null
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

    case SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.payload
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

export const setProfileInfo = (payload) => ({type: SET_PROFILE_INFO, payload})