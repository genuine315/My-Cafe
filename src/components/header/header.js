import { Link } from "react-router-dom";
import React, { useState } from "react";
import useStyle from "./style";
import ModeToggle from "../layout/modeToggle/ModeToggle";
import { ButtonBase, useMediaQuery, useTheme } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import { connect } from "react-redux";
import { ToggleDrawer } from "../../store/actions";
import { DrawerIconHidden } from "../../store/actions/index";
import { DrawerIconShow } from "../../store/actions/index";

const Header = (props) => {
  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));

  window.onscroll = function () {
    bgHeder();
  };

  function bgHeder() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("header").classList.add("headerBGDark");
    } else {
      document.getElementById("header").classList.remove("headerBGDark");
    }
  }

  const classes = useStyle();
  return (
    <div className={classes.headerDiv}>
      <div className={classes.navbarDiv}>
        <div id="header" className={classes.header}>
          <div className={classes.navbar}>
            {isTabletSize && (
              <Link to={"/"}>
                <div className={classes.navbarItem}>
                  <ButtonBase
                    onClick={() => {
                      return props.ToggleDrawer();
                    }}
                  >
                    <ListIcon />{" "}
                  </ButtonBase>
                </div>
              </Link>
            )}

            <Link to={"/"}>
              <div className={classes.navbarItem}>Home</div>
            </Link>

            <Link to={"/reservation"}>
              <div className={classes.navbarItem}>booking</div>
            </Link>

            <Link to={"/about"}>
              <div className={classes.navbarItem}>about</div>
            </Link>
            <Link to={"/connection"}>
              <div className={classes.navbarItem}>connection</div>
            </Link>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapstateToProps = (state) => {
  return { state };
};

export default connect(mapstateToProps, {
  ToggleDrawer: ToggleDrawer,
  DrawerIconHidden: DrawerIconHidden,
  DrawerIconShow: DrawerIconShow,
})(Header);
