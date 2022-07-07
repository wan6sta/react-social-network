import axios from "axios";

const SET_POSTS = 'SET_POSTS'
const SET_POST_TEXT_NOW = 'SET_POST_TEXT_NOW'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  posts: [],
  postTextNow: '',
  profileInfo: null,
  status: ''
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

    case SET_STATUS:
      return {
        ...state,
        status: action.payload
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

export const setStatus = (payload) => ({type: SET_STATUS, payload})

export const setProfileInfo = (payload) => ({type: SET_PROFILE_INFO, payload})

export const getProfile = (profileId) => (dispatch) => {
  if (profileId) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`,{
      withCredentials: true,
      headers: {
        "API-KEY": "4c455b41-e9e2-41e3-8498-c52fd2cfffdc"
      }
    }).then(res => {
      dispatch(setProfileInfo({...res.data}))
    })
  }
}

export const getStatus = (userId) => (dispatch) => {
  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`).then(
    res => {
      dispatch(setStatus(res.data))
    }
  )
}