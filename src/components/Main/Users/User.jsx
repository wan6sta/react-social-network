import s from './Users.module.scss'
import userIcon from '../../../assets/images/user.png'
import {Link} from "react-router-dom";
import axios from "axios";

const User = ({id, name, desc, isFollow, imgUrl, profileId, isLoading, setFollow, setUnFollow}) => {
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
          ? <button disabled={isLoading} onClick={() => setUnFollow(profileId, id)} className={s.userBtn}>Unfollow</button>
          : <button disabled={isLoading} onClick={() => setFollow(profileId, id)} className={s.userBtn}>Follow</button>
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