const SET_MESSAGES = 'SET_MESSAGES';
const SET_MESSAGE_TEXT_NOW = 'SET_MESSAGE_TEXT_NOW';

export const messagesReducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      state.messages.push({
        id: 5,
        text: state.messageTextNow,
      })
      state.messageTextNow = '';

      return state
    }

    case SET_MESSAGE_TEXT_NOW: {
      state.messageTextNow = action.text;

      return state
    }

    default: {
      return state
    }
  }
}

export const setMessages = () => ({type: SET_MESSAGES})
export const setMessageTextNow = (text) => ({type: SET_MESSAGE_TEXT_NOW, text})