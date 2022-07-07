import React, {useEffect, useState} from 'react';
import s from './Profile.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getStatus, setStatus} from "../../../redux/profileReducer";
import {getUser} from "../../../redux/authReducer";
import axios from "axios";

const ProfileStatus = () => {
  const [editStatus, setEditStatus] = useState(false)
  // const [editStatus1, setEditStatus1] = useState(false)
  const status = useSelector(state => state.profileReducer.status)
  const dispatch = useDispatch()
  const {isLogin, fullName, myProfile, userId} = useSelector(state => state.authReducer)

  axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', {
    status: '123321'
  }, {
    withCredentials: true,
    headers: {
      "API-KEY": "4c455b41-e9e2-41e3-8498-c52fd2cfffdc"
    }
  }).then(res => {
    console.log(res)
  })



  useEffect(() => {
    if (isLogin) {
      dispatch(getStatus(userId))
      dispatch(getUser())
    }
  }, [])

  return <div className={s.status}>
    <span>status: {fullName} {userId}</span>
    <div className={s.inputStatusWrap}>
      {
        editStatus
          ? <input
            onChange={e => dispatch(setStatus(e.target.value))}
            value={status} autoFocus={true}
            onBlur={(e) => {
              setEditStatus(false)
            }
            } className={s.inputStatus} type="text"/>
          : <div className={s.inputWrap} onClick={() => {
            setEditStatus(true)
          }}>
            {
              status
                ? <p>{status}</p>
                : <button className={s.noStatus}>Set status</button>
            }
          </div>
      }
    </div>
  </div>

};

export default ProfileStatus;