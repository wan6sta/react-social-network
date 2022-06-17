import s from './Header.module.css'

const Header = () => {
  return <header>
    <div className={s.container}>
      <div className={s.row}>
        <div className={s.logoWrapper}>
          <img src='https://cdn.svgporn.com/logos/react.svg' alt='logo' className={s.logoImg}/>
          <p>RSN</p>
        </div>

      </div>
    </div>
  </header>
}

export default Header;