import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return <div className={s.card}>
    <img className={s.ava}
         src='https://sun9-8.userapi.com/impf/nJNCDfTI3tQeXug-Y3L3d2oePowv0MmF8udkyw/HQQkdRrFbcw.jpg?size=1620x2160&quality=96&sign=9fea8621165a80af3ec1d9183c0e8c49&type=album'
         alt='ava'/>
    <p className={s.avaDesc}>
      Привет я <em>бомблю</em>  <span className={s.react}>React</span>.
    </p>
  </div>
};

export default ProfileInfo;