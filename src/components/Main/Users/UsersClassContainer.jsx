import React from "react";
import UsersFuncPresent from "./UsersFuncPresent";

class UsersClassContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageInfo.countPageUsers, this.props.pageInfo.currentPage)
  }

  render() {
    return <>
      <UsersFuncPresent
        countAllUsers={this.props.pageInfo.countAllUsers}
        countPageUsers={this.props.pageInfo.countPageUsers}
        currentPage={this.props.pageInfo.currentPage}
        usersList={this.props.usersList}
        isLoading={this.props.isLoading}

        getPage={this.props.getPage}
        setFollow={this.props.setFollow}
        setUnFollow={this.props.setUnFollow}
      />
    </>
  }
}

export default UsersClassContainer