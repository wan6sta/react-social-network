import s from './Messages.module.scss'
import Message from "./Message";
import {setMessages, setMessageTextNow} from "../../../redux/messagesReducer";

const Messages = ({store}) => {
  const messages = store.getState().messages.messages.map((message, id)=><Message text={message.text} key={id} />)

  return <div className={s.messagePage}>
    <div className={s.form}>
      <input
        onChange= {e => store.dispatch(setMessageTextNow(e.target.value))}
        value={store.getState().messages.messageTextNow}
        type="text"
        placeholder='enter your message'/>
      <button
        onClick={()=>store.dispatch(setMessages())}>Send</button>
    </div>
    <div className={s.messageWrapper}>
      {messages}
    </div>
  </div>
};

export default Messages;