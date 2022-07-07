import {Navigate} from "react-router-dom";


export const redirect = (Component) => (props, isLogin) => {
  {!isLogin && <Navigate to='/login'/>}
  return <Component {...props}/>
}
