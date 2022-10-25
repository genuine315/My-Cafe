import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/header";
import useStyle from "../style";


const Pages = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.headerDiv}>
        <Header/>
      </div>
      <Outlet />
      <div className={classes.footer}>
        <Footer/>
      </div>
    </>
  );
};

export default Pages;
