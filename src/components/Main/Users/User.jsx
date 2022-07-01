import s from './Users.module.scss'
import userIcon from '../../../assets/images/user.png'
import {Link} from "react-router-dom";
import axios from "axios";

const User = ({id, name, desc, isFollow, imgUrl, follow, unfollow, profileId}) => {
  const followUser = (id) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${profileId}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "4c455b41-e9e2-41e3-8498-c52fd2cfffdc"
      }
    }).then(res => {
      follow(id)
    })
  }

  const unFollowUser = (id) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${profileId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "4c455b41-e9e2-41e3-8498-c52fd2cfffdc"
      }
    }).then(res => {
      unfollow(id)
    })
  }

  return <>
    <div className={s.user}>
      <div className={s.ImgWrapper}>
        <Link to={`../myprofile/${profileId}`}>
          <img
            src={imgUrl ? imgUrl : userIcon}
            className={s.userIcon}
            alt="userIcon"/>
        </Link>
        {isFollow
          ? <button onClick={() => unFollowUser(id)} className={s.userBtn}>Unfollow</button>
          : <button onClick={() => followUser(id)} className={s.userBtn}>Follow</button>
        }
      </div>

      <div className={s.userCard}>
        <div className={s.userCardWrapper}>
          <p className={s.userCardName}>{name}</p>
          <p className={s.userCardDesc}>{desc}</p>
        </div>

        <div className={s.userCardWrapper}>
          <p className={s.userCardCountry}></p>
          <p className={s.userCardCity}></p>
        </div>
      </div>
    </div>
  </>
};

export default User;