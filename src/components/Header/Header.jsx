import s from './Header.module.scss'
import {Link} from "react-router-dom";
import icon from '../../assets/images/user.png'

const Header = () => {
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
          <img src={icon} alt="img"/>
          <p>some text</p>

          {/*<Link to={'login'}>Login</Link>*/}
        </div>
      </div>
    </div>
  </header>
}

export default Header;