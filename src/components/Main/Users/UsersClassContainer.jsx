import React from "react";
import axios from "axios";
import UsersFuncPresent from "./UsersFuncPresent";

class UsersClassContainer extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageInfo.countPageUsers}&page=${this.props.pageInfo.currentPage}`, {
      withCredentials: true
    }).then(res => {
      this.props.setUsersList(res.data.items)
      this.props.setIsLoading(false)
    })
  }

  render() {
    return <>
      <UsersFuncPresent
        countAllUsers={this.props.pageInfo.countAllUsers}
        countPageUsers={this.props.pageInfo.countPageUsers}
        currentPage={this.props.pageInfo.currentPage}
        usersList={this.props.usersList}

        setPreviousPageNumber={this.props.setPreviousPageNumber}
        setNextPageNumber={this.props.setNextPageNumber}

        setPageNumber={this.props.setPageNumber}
        setUsersList={this.props.setUsersList}

        follow={this.props.follow}
        unfollow={this.props.unfollow}

        setIsLoading={this.props.setIsLoading}
        isLoading={this.props.isLoading}
      />
    </>
  }
}

export default UsersClassContainer