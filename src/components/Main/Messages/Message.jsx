import s from './Messages.module.scss'

const Message = ({text}) => {
  return <div className={s.message}>
    {text}
  </div>
};

export default Message;