import s from './MyPosts.module.scss'
import Post from "./Post";

const MyPosts = ({posts, postTextNow, setPosts, setPostTextNow}) => {

  const postsNew = posts.map(
    (post, id) => <Post
      key={id}
      id={post.id}
      text={post.text}
      likes={post.likes}/>)

  return <>
    <div className={s.createPost}>
      <input
        value={postTextNow}
        onChange={(e)=>setPostTextNow(e.target.value)}
        type='text'
        placeholder='enter text'/>

      <button onClick={setPosts}>Post</button>
    </div>

    <div className={s.posts}>
      {postsNew}
    </div>
  </>
};

export default MyPosts;