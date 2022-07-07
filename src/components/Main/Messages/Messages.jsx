import s from './Messages.module.scss'
import Message from "./Message";
import {useSelector} from "react-redux";
import {redirect} from "../../../hoc/redirect";
import {Navigate} from "react-router-dom";

const Messages = ({messages, messageTextNow, setMessages, setMessageTextNow}) => {
  const messagesNew = messages.map(
    (message, id) => <Message text={message.text} key={id}/>
  )
  const isLogin = useSelector(state => state.authReducer.isLogin)

  return <>
    {!isLogin && <Navigate to='/login'/>}
    <div className={s.messagePage}>
      <div className={s.form}>
        <input
          onChange={e => setMessageTextNow(e.target.value)}
          value={messageTextNow}
          type="text"
          placeholder='enter your message'/>
        <button
          onClick={() => setMessages()}>Send
        </button>
      </div>

      <div className={s.messageWrapper}>
        {messagesNew}
      </div>
    </div>
  </>
};

export default Messages