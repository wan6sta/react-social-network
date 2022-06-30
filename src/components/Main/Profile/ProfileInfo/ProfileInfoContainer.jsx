import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {setProfileInfo} from "../../../../redux/profileReducer";

const mapStateToProps = (state) => {
  return {
      profileInfo: state.profileReducer.profileInfo
  }
}

export const ProfileInfoContainer = connect(mapStateToProps, {
  setProfileInfo
})(ProfileInfo)