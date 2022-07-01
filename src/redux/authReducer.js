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