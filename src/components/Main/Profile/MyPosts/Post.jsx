import s from "./MyPosts.module.css";

const Post = ({id, text, likes}) => {
  return <>
    <div className={s.post}>{text}</div>
  </>
};

export default Post;