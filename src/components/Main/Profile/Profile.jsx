import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";



const Profile = () => {
  return <main className={s.content}>
    <div className={s.row}>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  </main>
};

export default Profile;