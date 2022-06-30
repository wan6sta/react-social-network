import s from './Main.module.css'
import MainNav from './MainNav/MainNav';
import Profile from './Profile/Profile';
import {MessagesContainer} from "./Messages/MessagesContainer";
import {UsersContainer} from "./Users/UsersContainer";
import Void from "./Void";

import {Routes, Route} from "react-router-dom";

const Main = () => {
  return <div className={s.main}>
    <div className={s.container}>
      <div className={s.row}>
        <MainNav/>
        <Routes>
          <Route path="/myprofile/:userid" element={<Profile />}/>
          <Route path="/messages" element={<MessagesContainer />}/>
          <Route path="/users" element={<UsersContainer />}/>
          <Route path="/news" element={<Void/>}/>
          <Route path="/music" element={<Void/>}/>
          <Route path="/settings" element={<Void/>}/>

          <Route path="*" element={<Profile />}/>
        </Routes>
      </div>
    </div>
  </div>
};

export default Main;