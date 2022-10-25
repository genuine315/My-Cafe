import { Link } from "react-router-dom";
import React from "react";
import useStyle from "./style";
import ModeToggle from "../layout/components/modeToggle/ModeToggle";
import { ButtonBase, useMediaQuery, useTheme } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import { connect } from "react-redux";
import { ToggleDrawer } from "../../store/actions";
import { DrawerIconHidden } from "../../store/actions/index";
import { DrawerIconShow } from "../../store/actions/index";
import SignOutButton from "../layout/components/sign out button/SignOutButton";

const Header = (props) => {

  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));
  const noMobileSize = useMediaQuery(theme.breakpoints.up(430));
  const ShowPowerSize = useMediaQuery(theme.breakpoints.up(600));

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
                  <ListIcon />
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
          <div>{noMobileSize && <ModeToggle />}</div>
          <div>
            {ShowPowerSize && <SignOutButton/>}
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
