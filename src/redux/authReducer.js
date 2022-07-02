import axios from "axios";

const SET_USER = 'SET_USER'

const initialState = {
  isLogin: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
        isLogin: true
      }
    default:
      return state
  }
}

export const setUser = (payload) => ({type: SET_USER, payload})


export const getUser = () => async (dispatch) => {
  const authProfile = await axios.get(
    'https://social-network.samuraijs.com/api/1.0/auth/me',
    {withCredentials: true})

  if (authProfile.data.resultCode === 0) {
    const profile = await axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${authProfile.data.data.id}`)
    dispatch(setUser(profile.data))
  }
}