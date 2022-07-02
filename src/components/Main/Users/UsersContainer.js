import {connect} from "react-redux";
import UsersClassContainer from "./UsersClassContainer";

import {getPage, getUsers, setFollow, setUnFollow} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    usersList: state.usersReducer.usersList,
    pageInfo: state.usersReducer.pageInfo,
    isLoading: state.usersReducer.isLoading,
  }
}

export const UsersContainer = connect(mapStateToProps, {
  getPage,
  getUsers,
  setFollow,
  setUnFollow
})(UsersClassContainer)