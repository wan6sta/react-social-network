import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



const Profile = () => {
  return <main className={s.content}>
    <div className={s.row}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  </main>
};

export default Profile;