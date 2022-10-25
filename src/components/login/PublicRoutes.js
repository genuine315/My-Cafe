import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = (props) => {
  let isLogin = props.LoginReducer;
  if (isLogin === true) {
    localStorage.setItem("LoginMycafe", true);
  }
  if (isLogin === false) {
    localStorage.setItem("LoginMycafe", false);
  }
  let statusLogin = localStorage.getItem("LoginMycafe");

  if (statusLogin === "true") {
    return <Navigate to={"/"} />;
  }
  if (statusLogin === "false") {
    return <Outlet />;
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PublicRoutes);
