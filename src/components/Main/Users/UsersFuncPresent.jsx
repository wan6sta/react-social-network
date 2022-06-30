import React from 'react';
import s from "./Users.module.scss";
import axios from "axios";
import User from "./User";

const UsersFuncPresent =
  ({
     setNextPageNumber,
     setPreviousPageNumber,
     countAllUsers,
     countPageUsers,
     setPageNumber,
     setUsersList,
     currentPage,
     usersList,
     follow,
     unfollow,
     setIsLoading,
     isLoading
   }) => {

    const pagination = [];
    const countAllPages = Math.ceil(countAllUsers / countPageUsers)

    for (let i = 1; i <= countAllPages; i++) {
      pagination.push(i);
    }

    const paginationButtons = pagination.map(num => <button
      onClick={() => {
        setPageNumber(num)
        setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPageUsers}&page=${num}`)
          .then(res => {
            setUsersList(res.data.items)
            setIsLoading(false)
          })
      }}
      className={num === currentPage
        ? s.pagBtn + ' ' + s.activeBtn
        : s.pagBtn
      }
      key={num}>{num}</button>)

    const users = usersList.map((user, id) => <User
      key={user.id}

      profileId = {user.id}
      id={id}
      name={user.name}
      desc={user.status}
      isFollow={user.followed}
      imgUrl={user.photos.small}

      follow={follow}
      unfollow={unfollow}
    />)

    return <>
      {
        isLoading &&
          <div className={s.loadingWrapper}>
            <div className={s.loading}></div>
          </div>
      }

      <div className={s.users}>
        <div className={s.pagination}>
          <button onClick={setPreviousPageNumber} className={s.previous}></button>
          {paginationButtons}
          <button onClick={setNextPageNumber} className={s.next}></button>
        </div>

        {users}
      </div>
    </>
  };

export default UsersFuncPresent