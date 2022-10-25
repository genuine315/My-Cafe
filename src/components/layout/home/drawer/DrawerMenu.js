import React from "react";
import { Drawer, useMediaQuery, useTheme } from "@material-ui/core";
import { connect } from "react-redux";
import { ToggleDrawer } from "../../../../store/actions/index";
import useStyle from "./style";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import CakeIcon from "@material-ui/icons/Cake";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import "./style.css";
import ModeToggle from "../../components/modeToggle/ModeToggle";
import SignOutButton from "../../components/sign out button/SignOutButton";

const DrawerMenu = ({
  state,
  ToggleDrawer,
  ShowHotCafe,
  ShowCake,
  ShowJuice,
  ShowFastfood,
}) => {
  const classes = useStyle();

  const theme = useTheme();
  const isMobiletSize = useMediaQuery(theme.breakpoints.down(430));
  const ShowPowerSize = useMediaQuery(theme.breakpoints.down(600));
  return (
    <Drawer
      className={classes.drawer}
      anchor={"left"}
      open={state.drawerReducer}
      onClose={() => {
        return ToggleDrawer();
      }}
    >
      <div className={classes.title}>
        <h1>Menu</h1>
        {isMobiletSize && <ModeToggle />}
      </div>
      <div className={classes.container}>
        <div>
          <div className={classes.itemDrawer} onClick={ShowHotCafe}>
            <h2 id="cafee" data-text=" caffe">
              caffe <LocalCafeIcon style={{ color: "#CDB30C" }} />
            </h2>
          </div>
        </div>
        <div>
          <div className={classes.itemDrawer} onClick={ShowCake}>
            <h2 id="cake" data-text="cake">
              cake <CakeIcon style={{ color: "#62760C" }} />
            </h2>
          </div>
        </div>
        <div>
          <div className={classes.itemDrawer} onClick={ShowJuice}>
            <h2 id="juice" data-text="juice">
              juice <LocalBarIcon style={{ color: "#00917C" }} />
            </h2>
          </div>
        </div>
        <div>
          <div className={classes.itemDrawer} onClick={ShowFastfood}>
            <h2 id="fastfood" data-text="fastfood">
              fastfood
              <FastfoodIcon style={{ color: "#F88F01" }} />
            </h2>
          </div>
        </div>
        {ShowPowerSize &&<div className={classes.powerButton}> <SignOutButton /></div>}
      </div>
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { ToggleDrawer: ToggleDrawer })(
  DrawerMenu
);
