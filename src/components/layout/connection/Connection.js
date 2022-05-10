import { ButtonBase } from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "./style";

const Connection = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [textMessage, setTextMessage] = useState();

  const message = {
    name: name,
    email: email,
    text: textMessage,
  };
  const sendMessage = () => {
    console.log(message);
  };

  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <p style={{ color: "#fff", fontSize: "20px" }}>
          we are here to create beautiful moments for you.so if somethings makes
          you happy or you are upset about somethings be sure to tell us. your
          opinion is very important for us.
        </p>
      </div>
      <div>
        <form className={classes.inputs}>
          <h3 className={classes.h3}>NAME</h3>
          <input
            type={"text"}
            className={classes.input}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="tom"
            required
          />
          <h3 className={classes.h3}>EMAIL</h3>
          <input
            type={"email"}
            className={classes.input}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="abcdef@email.com"
            required
          />
          <h3 className={classes.h3}>MASSAGE TEXT</h3>
          <textarea
            rows={6}
            className={classes.textarea}
            onChange={(e) => {
              setTextMessage(e.target.value);
            }}
            placeholder="tell us . . . "
            required
          />
          <div className={classes.btn}>
            <ButtonBase
              type="submit"
              className={classes.button}
              onClick={sendMessage}
            >
              send
            </ButtonBase>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connection;
