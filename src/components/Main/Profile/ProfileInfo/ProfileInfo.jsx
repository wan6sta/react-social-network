import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProfileUser from "./ProfileUser";
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

const ProfileInfo = ({profileInfo, getProfile}) => {
  const profileId = useParams().userid



  useEffect(() => {
    getProfile(profileId)
  }, [])
  return <>


    <ProfileUser
      profileInfo={profileInfo}
    />
  </>
};

export default ProfileInfo;