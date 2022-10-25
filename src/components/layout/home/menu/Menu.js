import React from "react";
import useStyle from "./style";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import CakeIcon from "@material-ui/icons/Cake";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const Menu = ({ ShowHotCafe, ShowCake, ShowJuice, ShowFastfood }) => {
  const classes = useStyle();
  return (
    <div className={classes.meno}>
      <div className={classes.MenoContainer}>
        <div className={classes.MenoLable}>
          <h2 className={classes.lable}>meno</h2>
        </div>
        <div className={classes.MenoRow}>
          <div className={classes.MenoItemTop} onClick={ShowHotCafe}>
            <h2 className={classes.lable}>caffe</h2>
            <LocalCafeIcon />
          </div>
          <div className={classes.MenoItemTop} onClick={ShowCake}>
            <h2 className={classes.lable}>cake</h2>
            <CakeIcon />
          </div>
        </div>
        <div className={classes.MenoRow}>
          <div className={classes.MenoItemBottom} onClick={ShowJuice}>
            <h2 className={classes.lable}>juice</h2>
            <LocalBarIcon />
          </div>
          <div className={classes.MenoItemBottom} onClick={ShowFastfood}>
            <h2>fastfood</h2>
            <FastfoodIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
