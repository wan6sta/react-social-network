import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {setPosts, setPostTextNow} from "../../../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    postTextNow: state.profileReducer.postTextNow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: () => dispatch(setPosts()),
    setPostTextNow: (text) => dispatch(setPostTextNow(text)),
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);