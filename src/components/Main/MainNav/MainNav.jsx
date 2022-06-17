import s from './MainNav.module.css'
import {NavLink} from "react-router-dom";

const MainNav = () => {
  return <nav className={s.nav}>
      <div className={s.row}>
        <div className={s.linkWrapper}>
          <NavLink to='/myprofile' style={({ isActive }) =>
            isActive ? {color: '#00d8ff'} : undefined
          }>My profile</NavLink>
        </div>
        <div className={s.linkWrapper}>
          <NavLink to='/news' style={({ isActive }) =>
            isActive ? {color: '#00d8ff'} : undefined
          }>News</NavLink>
        </div>
        <div className={s.linkWrapper}>
          <NavLink to='/messages' style={({ isActive }) =>
            isActive ? {color: '#00d8ff'} : undefined
          }>Messages</NavLink>
        </div>
        <div className={s.linkWrapper}>
          <NavLink to='/music' style={({ isActive }) =>
            isActive ? {color: '#00d8ff'} : undefined
          }>Music</NavLink>
        </div>
        <div className={`${s.linkWrapper} ${s.linkWrapperSettings}`}>
          <NavLink to='/settings' style={({ isActive }) =>
            isActive ? {color: '#00d8ff'} : undefined
          }>Settings</NavLink>
        </div>
      </div>
  </nav>
};

export default MainNav;