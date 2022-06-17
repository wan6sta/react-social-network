import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({state}) => {
  return <main className={s.content}>
    <div className={s.row}>
      <ProfileInfo />
      <MyPosts state={state}/>
    </div>
  </main>
};

export default Profile;