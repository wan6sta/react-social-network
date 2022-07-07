import s from './Profile.module.scss'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";
import ProfileStatus from "./ProfileStatus";



const Profile = () => {
  return <main className={s.content}>
    <div className={s.row}>
      <div className={s.profileCard}>
        <ProfileInfoContainer />
        <ProfileStatus />
      </div>


      <MyPostsContainer />
    </div>
  </main>
};

export default Profile;