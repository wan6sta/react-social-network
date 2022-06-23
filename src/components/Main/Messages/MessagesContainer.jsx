import Messages from "./Messages";
import {setMessages, setMessageTextNow} from "../../../redux/messagesReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.messagesReducer.messages,
    messageTextNow: state.messagesReducer.messageTextNow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMessages: () => dispatch(setMessages()),
    setMessageTextNow: (text) => dispatch(setMessageTextNow(text)),
  }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)