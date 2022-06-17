import s from './MyPosts.module.css'
import Post from "./Post";

const MyPosts = ({state}) => {
  const posts =  state.posts.map(p => <Post key={p.id} id={p.id} text={p.text} likes={p.likes}/>)

  return <>
    <div className={s.createPost}>
      <input type='text' placeholder='create new post'/>
      <button>Post</button>
    </div>

    <div className={s.posts}>
      {posts}
    </div>
  </>
};

export default MyPosts;