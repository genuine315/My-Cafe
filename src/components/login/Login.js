import React, { useState } from "react";
import useStyle from "./style";
import { actionIsLogin } from "../../store/actions";
import { connect } from "react-redux";

const Login = (props) => {
  const classes = useStyle();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const user = "username";
  const usercode = "password";
  const useremail = "email";

  const handleLogin = () => {
    if ((userName === user) & (email === useremail) & (password === usercode)) {
      props.actionIsLogin()
    } else {
      alert("false");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.divider}></div>
        <h1 style={{ marginBottom: "30px" }}>LOGIN</h1>
        <div className={classes.inputDiv}>
          <label className={classes.lable}>USERNAME :</label>
          <input
            className={classes.input}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
        <div className={classes.inputDiv}>
          <label className={classes.lable}>EMAIL :</label>
          <input
            className={classes.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className={classes.inputDiv}>
          <label className={classes.lable}>PASSWORD :</label>
          <input
            className={classes.input}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button className={classes.button} onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { actionIsLogin })(Login);
