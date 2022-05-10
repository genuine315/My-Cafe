import React, { useState } from "react";
import useStyle from "./style";
import Menu from "./menu/Menu";
import HotCoffe from "../home/hotCofee/HotCoffe";
import Cake from "../home/cake/Cake";
import Juice from "../home/juice/Juice";
import FastFood from "../home/fastfood/FastFood";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import DrawerMenu from "./drawer/DrawerMenu";

const Home = () => {
  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));

  const [tab, setTab] = useState(0);
  const hotcofe = 1;
  const cake = 2;
  const juice = 3;
  const fastfood = 4;

  const classes = useStyle();
  return (
    <div className={classes.background}>
      <div className={classes.body}>
        <div className={classes.menu}>
          <div className={classes.leftDiv}>
            {isTabletSize ? (
              <DrawerMenu
                ShowHotCafe={() => {
                  setTab(hotcofe);
                }}
                ShowCake={() => {
                  setTab(cake);
                }}
                ShowJuice={() => {
                  setTab(juice);
                }}
                ShowFastfood={() => {
                  setTab(fastfood);
                }}
              />
            ) : (
              <Menu
                ShowHotCafe={() => {
                  setTab(hotcofe);
                }}
                ShowCake={() => {
                  setTab(cake);
                }}
                ShowJuice={() => {
                  setTab(juice);
                }}
                ShowFastfood={() => {
                  setTab(fastfood);
                }}
              />
            )}
          </div>
        </div>
        <div className={classes.content}>
          {tab === 1 && <HotCoffe />}
          {tab === 2 && <Cake />}
          {tab === 3 && <Juice />}
          {tab === 4 && <FastFood />}
        </div>
      </div>
    </div>
  );
};

export default Home;
