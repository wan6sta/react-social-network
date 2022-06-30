import React from 'react';
import s from "./ProfileInfo.module.css";
import userIcon from "../../../../assets/images/user.png";

const ProfileUser = ({profileInfo}) => {
  return <>
    <div className={s.card}>
      <img className={s.ava}
           src={profileInfo?.photos?.small ? profileInfo?.photos?.small : userIcon}
           alt='ava'/>
      <p>{profileInfo?.fullName}</p>
      <p className={s.avaDesc}>
        {profileInfo?.aboutMe}
      </p>
      <p className={s.avaDesc}>
        {profileInfo?.lookingForAJobDescription}
      </p>
    </div>
  </>
};

export default ProfileUser;