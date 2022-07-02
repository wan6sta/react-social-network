import axios from "axios";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS_LIST = 'SET_USERS_LIST'
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
const SET_PREVIOUS_PAGE_NUMBER = 'SET_PREVIOUS_PAGE_NUMBER'
const SET_NEXT_PAGE_NUMBER = 'SET_NEXT_PAGE_NUMBER'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
  usersList: [],
  pageInfo: {
    countAllUsers: 200,
    countPageUsers: 10,
    currentPage: 1
  },
  isLoading: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // usersList: [...state.usersList],
        usersList: state.usersList.map((user, id) => {
          if (action.id === id) {
            return {...user, followed: true}
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        // usersList: [...state.usersList],
        usersList: state.usersList.map((user, id) => {
          if (action.id === id) {
            return {...user, followed: false}
          }
          return user
        }),
      }

    case SET_PAGE_NUMBER:
      return {
         ...state,
        pageInfo: {...state.pageInfo, currentPage: action.id}
      }
    case SET_PREVIOUS_PAGE_NUMBER: {
      const stateCopy = {
        ...state,
        pageInfo: {...state.pageInfo}
      }
      if (state.pageInfo.currentPage > 1) {
        stateCopy.pageInfo.currentPage -= 1;
      }
      return stateCopy
    }

    case SET_NEXT_PAGE_NUMBER: {
      const stateCopy = {
        ...state,
        pageInfo: {...state.pageInfo}
      }
      if (state.pageInfo.currentPage < state.pageInfo.countAllUsers / state.pageInfo.countPageUsers) {
        stateCopy.pageInfo.currentPage += 1;
      }
      return stateCopy
    }

    case SET_USERS_LIST:
      return {
        ...state,
        usersList: [...action.users]
      }

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default: {
      return state
    }
  }
}

export const follow = (id) => ({type: FOLLOW, id})
export const unfollow = (id) => ({type: UNFOLLOW, id})
export const setUsersList = (users) => ({type: SET_USERS_LIST, users})
export const setPageNumber = (id) => ({type: SET_PAGE_NUMBER, id})
export const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload})


export const getUsers = (countPageUsers, currentPage) => (dispatch) => {
  dispatch(setIsLoading(true))
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPageUsers}&page=${currentPage}`, {
    withCredentials: true
  }).then(res => {
     dispatch(setUsersList(res.data.items))
    dispatch(setIsLoading(false))
  })
}

export const getPage = (num, countPageUsers) => (dispatch) => {
  dispatch(setPageNumber(num))
  dispatch(setIsLoading(true))

  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPageUsers}&page=${num}`, {
    withCredentials: true
  })
    .then(res => {
      dispatch(setUsersList(res.data.items))
      dispatch(setIsLoading(false))
    })
}

export const setFollow = (profileId, id) => (dispatch) => {
  dispatch(setIsLoading(true))

  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${profileId}`, {}, {
    withCredentials: true,
    headers: {
      "API-KEY": "4c455b41-e9e2-41e3-8498-c52fd2cfffdc"
    }
  }).then(res => {
    dispatch(setIsLoading(false))
    dispatch(follow(id))
  })
}

export const setUnFollow = (profileId, id) => (dispatch) => {
  dispatch(setIsLoading(true))

  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${profileId}`,  {
    withCredentials: true,
    headers: {
      "API-KEY": "4c455b41-e9e2-41e3-8498-c52fd2cfffdc"
    }
  }).then(res => {
    dispatch(setIsLoading(false))
    dispatch(unfollow(id))
  })
}



export default usersReducer