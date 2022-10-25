import React from "react";
import Home from "./home/Home";
import AboutCofe from "./about cofe/AboutCofe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservation from "./reservation/Reservation";
import Connection from "./connection/Connection";
import { ThemeProvider } from "@material-ui/styles";
import { LightTheme } from "../../theme/index";
import { DarkTheme } from "../../theme/index";
import { connect } from "react-redux";
import Page404 from "../404Page/Page404";
import Login from "../login/Login";
import Pages from "./pages/Pages";
import PublicRoutes from "../login/PublicRoutes";
import PrivateRoutes from "../login/PrivateRoutes";
import ReservePage from "./reservation/reserv page/ReservePage";

const Layout = (props) => {
  return (
    <ThemeProvider
      theme={props.state.themeReducer === true ? LightTheme : DarkTheme}
    >
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Pages />}>
                <Route path={"/reservation"} element={<Reservation />} />
                <Route
                  path={"/reservation/:reserv"}
                  element={<ReservePage />}
                />
                <Route path={"/about"} element={<AboutCofe />} />
                <Route path={"/connection"} element={<Connection />} />
                <Route exact path="/" element={<Home />} />
              </Route>
            </Route>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Layout);
