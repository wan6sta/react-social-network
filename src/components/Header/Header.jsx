import s from './Header.module.scss'
import icon from '../../assets/images/user.png'

import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../redux/authReducer";
import axios from "axios";

const Header = () => {
  const user = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return <header>
    <div className={s.container}>
      <div className={s.row}>
        <Link className={s.link} to={'/myprofile'}>
          <div className={s.logoWrapper}>
            <img src='https://cdn.svgporn.com/logos/react.svg' alt='logo' className={s.logoImg}/>
            <p>RSN</p>
          </div>
        </Link>
        <div className={s.myprofile}>
          {
            user.isLogin ? <div className={s.myprofile}>
                <img src={
                  user.photos.small ? user.photos.small :
                    icon} alt="img"/>
                <p>{user?.fullName}</p>
              </div>
              : <Link to={'login'}>Login</Link>
          }
        </div>
      </div>
    </div>
  </header>
}

export default Header;