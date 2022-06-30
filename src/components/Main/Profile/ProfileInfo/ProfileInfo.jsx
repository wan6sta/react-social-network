import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ProfileUser from "./ProfileUser";

const ProfileInfo = ({profileInfo, setProfileInfo}) => {
  const profileId = useParams().userid

  useEffect(() => {
    if (profileId) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then(res => {
        setProfileInfo({...res.data})
      })
    }
  }, [])
  return <>
    <ProfileUser
      profileInfo={profileInfo}
    />
  </>
};

export default ProfileInfo;