import { ButtonBase } from "@material-ui/core";
import React from "react";
import img404 from "../../images/404page.png";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
const Page404 = () => {

  const style404 = {
    backgroundImage: `url(${img404})`,
    background: `url(${img404}) no-repeat fixed center/cover`,
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: "0",
    zIndex: "9999",
  };
  const styleButton={
    color: "#3E8E7E",
    position: "absolute",
    top: "20px",
    left: "20px",
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0 0 10px 1px",
  }
  return (
    <div style={style404}>
      <Link to="/">
        <ButtonBase
          style={styleButton}
        >
          <HomeIcon />
        </ButtonBase>
      </Link>
    </div>
  );
};

export default Page404;
