import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getProfile} from "../../../../redux/profileReducer";


const mapStateToProps = (state) => {
  return {
      profileInfo: state.profileReducer.profileInfo
  }
}

export const ProfileInfoContainer = connect(mapStateToProps, {
  getProfile
})(ProfileInfo)