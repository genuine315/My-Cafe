import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import useStyle from "./style";
import { connect } from "react-redux";

const ModalComponenet = (props) => {
  const classes = useStyle();

  const [date, setDate] = useState(props.ClientDataReducer.date);
  const [time, setTime] = useState(props.ClientDataReducer.time);
  const [occasion, setOccasion] = useState(props.ClientDataReducer.accasion);
  const [theme, setTheme] = useState(props.ClientDataReducer.theme);
  const [cake, setCake] = useState(props.ClientDataReducer.cake);
  const [balloon, setBalloon] = useState(props.ClientDataReducer.balloon);

  const clientData = props.ClientDataReducer;
  
  const editItem = props.modalItem;

  const dateBody = (
    <div className={classes.container}>
      {editItem === "date" && (
        <>
          <h1>edit date</h1>
          <input
            type="date"
            className={classes.input}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <button
            className={classes.button}
            onClick={() => {
              clientData.date = date;
              props.handleClose();
            }}
          >
            edit
          </button>
        </>
      )}
      {editItem === "time" && (
        <>
          <h1>edit time</h1>
          <input
            type="time"
            className={classes.input}
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button
            className={classes.button}
            onClick={() => {
              clientData.time = time;
              props.handleClose();
            }}
          >
            edit
          </button>
        </>
      )}
      {editItem === "occasion" && (
        <>
          <h1>edit occasion</h1>
          <select
            className={classes.input}
            onChange={(e) => {
              setOccasion(e.target.value);
            }}
            required
          >
            <option value={"NO OCCASION"}>NO OCCASION</option>
            <option value={"BIRTHDAY"}>BIRTHDAY</option>
            <option value={"ANNIVERSARY"}>ANNIVERSARY</option>
          </select>
          <button
            className={classes.button}
            onClick={() => {
              clientData.occasion = occasion;
              props.handleClose();
            }}
          >
            edit
          </button>
        </>
      )}
      {editItem === "theme" && (
        <>
          <h1>edit theme</h1>
          <select
            className={classes.input}
            // value={date}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            required
          >
            <option value={"NO THEME"}>NO THEME</option>
            <option value={"HEART"}>HEART</option>
            <option value={"HBD"}> HBD</option>
            <option value={"I LOVE YOU"}>I LOVE YOU</option>
          </select>
          <button
            className={classes.button}
            onClick={() => {
              clientData.theme = theme;
              props.handleClose();
            }}
          >
            edit
          </button>
        </>
      )}
      {editItem === "cake" && (
        <>
          <h1>edit cake</h1>
          <div>
            <input
              type="checkbox"
              className={classes.checkbox}
              value="NO"
              onChange={(e) => {
                setCake(e.target.value);
              }}
            />
            <span style={{ fontSize: "20px", fontWeight: "700" }}>NO</span>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.checkbox}
              value="YES"
              onChange={(e) => {
                setCake(e.target.value);
              }}
            />
            <span style={{ fontSize: "20px", fontWeight: "700" }}>YES</span>
          </div>
          <button
            className={classes.button}
            onClick={() => {
              clientData.cake = cake;
              props.handleClose();
            }}
          >
            edit
          </button>
        </>
      )}
      {editItem === "balloon" && (
        <>
          <h1>edit balloon</h1>
          <div>
            <input
              type="checkbox"
              className={classes.checkbox}
              value="NO"
              onChange={(e) => {
                setBalloon(e.target.value);
              }}
            />
            <span style={{ fontSize: "20px", fontWeight: "700" }}>NO</span>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.checkbox}
              value="YES"
              onChange={(e) => {
                setBalloon(e.target.value);
              }}
            />
            <span style={{ fontSize: "20px", fontWeight: "700" }}>YES</span>
          </div>
          <button
            className={classes.button}
            onClick={() => {
              clientData.balloon = balloon;
              props.handleClose();
            }}
          >
            edit
          </button>
        </>
      )}
    </div>
  );
  return (
    <Modal
      style={{ width: "100%" }}
      open={props.open}
      onClose={() => {
        props.handleClose();
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {dateBody}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ModalComponenet);
