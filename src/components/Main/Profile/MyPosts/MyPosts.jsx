import s from './MyPosts.module.scss'
import Post from "./Post";

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
        onChange={e => store.setPostTextNow(e.target.value)}
        type='text'
        placeholder='create new post'/>

      <button
        onClick={() => store.setPosts()}>Post</button>
    </div>

    <div className={s.posts}>
      {posts}
    </div>
  </>
};

export default MyPosts;