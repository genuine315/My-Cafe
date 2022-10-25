import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  let isLogin = props.LoginReducer;
  if (isLogin === true) {
    localStorage.setItem("LoginMycafe", true);
  }
  if (isLogin === false) {
    localStorage.setItem("LoginMycafe", false);
  }
  let statusLogin = localStorage.getItem("LoginMycafe");

  if (statusLogin === "true") {
    return <Outlet />;
  }
  if (statusLogin === "false") {
    return <Navigate to={"/login"} />;
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PrivateRoutes);
