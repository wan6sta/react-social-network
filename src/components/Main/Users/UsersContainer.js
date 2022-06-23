import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow} from "../../../redux/usersReducer";


const mapStateToProps = (state) => {
  return {
    usersList: state.usersReducer.usersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      follow: (id) => dispatch(follow(id)),
      unfollow: (id) => dispatch(unfollow(id)),
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)