import s from './Users.module.scss'
import User from "./User";


const Users = ({usersList, follow, unfollow}) => {


  const users = usersList.map((user, id) => <User
    key={id}

    id={id}
    name={user.name}
    desc={user.desc}
    country={user.country}
    city={user.city}
    isFollow={user.isFollow}
    imgUrl={user.imgUrl}

    follow={follow}
    unfollow={unfollow}
  />)

  return <>
      <div className={s.users}>
        {users}
      </div>
  </>
};

export default Users;