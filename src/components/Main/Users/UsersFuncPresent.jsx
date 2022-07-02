import React from 'react';
import s from "./Users.module.scss";
import User from "./User";
import {setUnFollow} from "../../../redux/usersReducer";

const UsersFuncPresent =
  ({
     countAllUsers,
     countPageUsers,
     currentPage,
     usersList,
     isLoading,

     getPage,
     setFollow,
     setUnFollow
   }) => {

    const pagination = [];
    const countAllPages = Math.ceil(countAllUsers / countPageUsers)

    for (let i = 1; i <= countAllPages; i++) {
      pagination.push(i);
    }

    const paginationButtons = pagination.map(num => <button
      onClick={() => getPage(num, countPageUsers)}
      className={num === currentPage
        ? s.pagBtn + ' ' + s.activeBtn
        : s.pagBtn
      }
      key={num}>{num}</button>)

    const users = usersList.map((user, id) => <User
      key={user.id}

      profileId={user.id}
      id={id}
      name={user.name}
      desc={user.status}
      isFollow={user.followed}
      imgUrl={user.photos.small}
      setFollow={setFollow}
      setUnFollow={setUnFollow}
      isLoading={isLoading}
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
          {paginationButtons}
        </div>

        {users}
      </div>
    </>
  };

export default UsersFuncPresent