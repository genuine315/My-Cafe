const LoginReducer = (state = localStorage.getItem("LoginMycafe")||false, action) => {
    switch (action.type) {
      case "ACTION_IS_LOGIN":
        return (state = true);
      case "ACTION_NO_LOGIN":
        return (state = false);
      default:
        return state;
    }
  };
  export default LoginReducer;