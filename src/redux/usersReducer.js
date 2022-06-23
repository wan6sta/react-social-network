const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


const initialState = {
  usersList: [
    {
      id: 0,
      name: 'Ванька',
      desc: 'Я человек. И я люблю кодить!',
      country: 'Россия',
      city: 'Москва',

      isFollow: false,
      imgUrl: 'https://tl.rulate.ru/i/book/21/7/4199.jpg'
    },
    {
      id: 1,
      name: 'Данька',
      desc: 'А я играю в доту!',
      country: 'Россия',
      city: 'Череповец',

      isFollow: true,
      imgUrl: 'https://i1.sndcdn.com/artworks-zmJvaxECVKZq3zLt-I5z6eg-t500x500.jpg'
    },
    {
      id: 2,
      name: 'Мерц',
      desc: 'А я играю в доту тоже!',
      country: 'Россия',
      city: 'Череповец',

      isFollow: true,
      imgUrl: 'https://zooclub.ru/attach/47000/47734.jpg'
    },
  ]
}

const usersReducer = (state = initialState, action) => {
  const usersListCopy = {
    ...state,
    usersList: [...state.usersList]
  }

  switch (action.type) {
    case FOLLOW:
      let usersListCopyMap = usersListCopy.usersList.map((user, id) => {
        if (action.id === id) {
          user.isFollow = true;
          return user
        }
        return user
      })
      usersListCopy.usersList = usersListCopyMap;
      return usersListCopy

    case UNFOLLOW:
      let usersListCopyMap2 = usersListCopy.usersList.map((user, id) => {
        if (action.id === id) {
          user.isFollow = false;
          return user
        }
        return user
      })
      usersListCopy.usersList = usersListCopyMap2;
      return usersListCopy

    default: {
      return state
    }
  }
}

export const follow = (id) => ({type: FOLLOW, id})
export const unfollow = (id) => ({type: UNFOLLOW, id})

export default usersReducer