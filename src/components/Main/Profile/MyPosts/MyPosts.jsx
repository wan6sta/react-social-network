import s from './MyPosts.module.scss'
import Post from "./Post";
import {setPosts, setPostTextNow} from "../../../../redux/store";

const MyPosts = ({store}) => {

  const posts = store.getState().posts.map(
    (post, id) => <Post
      key={id}
      id={post.id}
      text={post.text}
      likes={post.likes}/>)

  return <>
    <div className={s.createPost}>
      <input
        value={store.getState().postTextNow}
        onChange={e => store.dispatch(setPostTextNow(e.target.value))}
        type='text'
        placeholder='enter text'/>

      <button
        onClick={() => store.dispatch(setPosts())}>Post
      </button>
    </div>

    <div className={s.posts}>
      {posts}
    </div>
  </>
};

export default MyPosts;