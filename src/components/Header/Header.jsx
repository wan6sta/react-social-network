import s from './Header.module.scss'
import {Link} from "react-router-dom";
import icon from '../../assets/images/user.png'
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../redux/authReducer";

const Header = () => {
  const user = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const getProfile = async () => {
      const authProfile = await axios.get(
        'https://social-network.samuraijs.com/api/1.0/auth/me',
        {withCredentials: true})

      if (authProfile.data.resultCode === 0) {
        const profile = await axios.get(
          `https://social-network.samuraijs.com/api/1.0/profile/${authProfile.data.data.id}`)
        dispatch(setUser(profile.data))
      }
    }

    getProfile().then(res => {
      console.log(res)
    })
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