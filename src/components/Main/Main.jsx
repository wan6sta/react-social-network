import s from './Main.module.css'
import MainNav from './MainNav/MainNav';
import Profile from './Profile/Profile';
import Messages from "./Messages/Messages";
import Void from "./Void";
import {Routes, Route} from "react-router-dom";
import store from "../../redux/store";


const Main = ({store}) => {
  return <div className={s.main}>
    <div className={s.container}>
      <div className={s.row}>
        <MainNav/>

        <Routes>
          <Route path="/myprofile" element={<Profile store={store}/>}/>
          <Route path="/messages" element={<Messages store={store}/>}/>

          <Route path="/news" element={<Void/>}/>
          <Route path="/music" element={<Void/>}/>
          <Route path="/settings" element={<Void/>}/>

          <Route path="*" element={<Profile store={store}/>}/>
        </Routes>

      </div>
    </div>
  </div>
};

export default Main;