import {connect} from "react-redux";
import UsersClassContainer from "./UsersClassContainer";

import {
  follow, setIsLoading,
  setNextPageNumber,
  setPageNumber,
  setPreviousPageNumber,
  setUsersList,
  unfollow
} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    usersList: state.usersReducer.usersList,
    pageInfo: state.usersReducer.pageInfo,
    isLoading: state.usersReducer.isLoading,
  }
}

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsersList,
  setPageNumber,
  setPreviousPageNumber,
  setNextPageNumber,
  setIsLoading
})(UsersClassContainer)