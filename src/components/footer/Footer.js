import React from "react";
import useStyle from "./style";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./footer.css"

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.footer} id="footer">
        <div className={classes.iconsDiv}>
          <div className={classes.iconDiv}>
            <a href={"https://goo.gl/maps/EzFq3Wf3SrJoshzE9"}>
              <LocationOnIcon
                className={classes.icon}
                style={{ color: "#000" }}
              ></LocationOnIcon >
            </a>
          </div>

          <div className={classes.iconDiv}>
            <a href={"https://github.com/genuine315"}>
              <GitHubIcon className={classes.icon} style={{ color: "#000" }} />
            </a>
          </div>
          <div className={classes.iconDiv}>
            <a href={"https://www.linkedin.com/in/shayan-kiani-7692b023a/"}>
              <LinkedInIcon
                className={classes.icon}
                style={{ color: "#22577E" }}
              />
            </a>
          </div>
          <div className={classes.iconDiv}>
            <a href={"https://t.me/Shayank315"}>
              <TelegramIcon
                className={classes.icon}
                style={{ color: "#5584AC" }}
              />
            </a>
          </div>
          <div>
            <h3 style={{ margin: "0 5px" }}>09017515315</h3>
          </div>
        </div>
        <div className={classes.developerDiv}>
          <h3>develope by genuine315</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
