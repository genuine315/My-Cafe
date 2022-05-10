import React from "react";
import useStyle from "./style";
import Header from "../header/header";
import Home from "./home/Home";
import AboutCofe from "./about cofe/AboutCofe";
import Footer from "../footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservation from "./reservation/Reservation";
import Connection from "./connection/Connection";
import caffeeBg from "../../images/bg.cafee.jpg";
import { ThemeProvider } from "@material-ui/styles";
import { LightTheme } from "../../theme/index";
import { DarkTheme } from "../../theme/index";
import { connect } from "react-redux";
import Page404 from "../404Page/Page404";

const Layout = (props) => {
  const classes = useStyle();

  return (
    <ThemeProvider
      theme={props.state.themeReducer === true ? LightTheme : DarkTheme}
    >
      <>
        <div
          style={{ backgroundImage: `url(${caffeeBg})` }}
          className={classes.parent}
        >
          <BrowserRouter>
            <div className={classes.headerDiv}>
              <Header />
            </div>
            <div>
              <Routes>
                <Route path={"/reservation"} element={<Reservation />} />
                <Route path={"/about"} element={<AboutCofe />} />
                <Route path={"/connection"} element={<Connection />} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
            <div className={classes.footer}>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Layout);
