import s from './Users.module.scss'
import User from "./User";
import {useEffect} from "react";
import axios from "axios";

const Users = ({usersList, follow, unfollow, setUsersList, pageInfo, setPageNumber, setPreviousPageNumber, setNextPageNumber}) => {

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageInfo.countPageUsers}&page=${pageInfo.currentPage}`).then(res=>{
      console.log('СЕТИМ ЮЗЕРОВ')
      setUsersList(res.data.items)
    })
  }, [pageInfo.currentPage])

  const pagination = [];
  for (let i = 1; i <= pageInfo.countAllUsers / pageInfo.countPageUsers; i++) {
    pagination.push(i);
  }


  const paginationButtons = pagination.map(num=> <button
    onClick={()=>setPageNumber(num)}
    className={num === pageInfo.currentPage
      ? s.pagBtn + ' ' + s.activeBtn
      : s.pagBtn
  }
    key={num}>{num}</button>)


  const users = usersList.map((user, id) => <User
    key={user.id}

    id={id}
    name={user.name}
    desc={user.status}
    isFollow={user.followed}
    imgUrl={user.photos.small}

    follow={follow}
    unfollow={unfollow}
  />)

  return <>
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

export default Users;