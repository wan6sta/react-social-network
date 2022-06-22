import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import store from "../../../redux/store";

const Profile = ({store}) => {
  return <main className={s.content}>
    <div className={s.row}>
      <ProfileInfo />
      <MyPosts store={store} />
    </div>
  </main>
};

export default Profile;