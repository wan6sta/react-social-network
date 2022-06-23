const SET_MESSAGES = 'SET_MESSAGES'
const SET_MESSAGE_TEXT_NOW = 'SET_MESSAGE_TEXT_NOW'

const initialState = {
  messages: [],
  messageTextNow: '',
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
    return {
      ...state,
      messages: [...state.messages, {id: 2112, text: state.messageTextNow}],
      messageTextNow: ''
    }

    case SET_MESSAGE_TEXT_NOW:
      return {
        ...state,
        messageTextNow: action.text
      }

    default:
      return state
  }
}

export const setMessages = () => ({type: SET_MESSAGES})
export const setMessageTextNow = (text) => ({type: SET_MESSAGE_TEXT_NOW, text})