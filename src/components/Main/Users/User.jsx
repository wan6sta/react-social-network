import s from './Users.module.scss'
import userIcon from '../../../assets/images/user.png'

const User = ({id, name, desc, country, city, isFollow, imgUrl, follow, unfollow}) => {
  return <>
      <div className={s.user}>
        <div className={s.ImgWrapper}>
          <img
            src={imgUrl ? imgUrl : userIcon}
            className={s.userIcon}
            alt="userIcon"/>
          {isFollow
            ? <button onClick={()=>unfollow(id)} className={s.userBtn}>Unfollow</button>
            : <button onClick={()=>follow(id)} className={s.userBtn}>Follow</button>
          }
        </div>

        <div className={s.userCard}>
          <div className={s.userCardWrapper}>
            <p className={s.userCardName}>{name}</p>
            <p className={s.userCardDesc}>{desc}</p>
          </div>

          <div className={s.userCardWrapper}>
            <p className={s.userCardCountry}>{country}</p>
            <p className={s.userCardCity}>{city}</p>
          </div>
        </div>
      </div>
  </>
};

export default User;