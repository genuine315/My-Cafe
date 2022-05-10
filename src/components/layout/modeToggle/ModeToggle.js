import React  from "react";
import { connect } from "react-redux";
import "./styleToggle.css";
import {
  LightThemeAction,
  DarkThemeAction,
} from "../../../store/actions/index";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const ModeToggle = (props) => {
  const changeMode = (e) => {
    if (e.target.checked) {
      props.LightThemeAction();
    } else {
      props.DarkThemeAction();
    }
    console.log(props.themeReducer);
  };

  return (
    <div style={{ display: "flex", alignItem: "center" }}>
      <label className="switch">
        <input
          id="toggle"
          type="checkbox"
          className="inp"
          onChange={changeMode}
        />
        <span className="slider">
          <WbSunnyIcon className="sunIcon" />
          <Brightness3Icon className="moonIcon" />
        </span>
        <span className="on"></span>
        <span className="off"></span>
      </label>
    </div>
  );
};

const MapStateToProps = (state) => {
  return { state };
};
export default connect(MapStateToProps, {
  DarkThemeAction: DarkThemeAction,
  LightThemeAction: LightThemeAction,
})(ModeToggle);
