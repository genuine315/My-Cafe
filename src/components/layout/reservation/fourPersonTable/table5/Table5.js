import React, { useState } from "react";
import useStyle from "./style";
import { ButtonBase } from "@material-ui/core";

const Table5 = () => {
  const ClickCelebrate1 = "BIRTHDAY";
  const ClickCelebrate2 = "ANNIVERSARY";

  const [numberTable, setNumberTable] = useState();
  const [valueDate, setValueDate] = useState();
  const [valueTime, setValueTime] = useState();
  const [valueReason, setValueReason] = useState();
  const [valueTheme, setValueTheme] = useState();
  const [cake, setCake] = useState("NO");
  const [balloons, setBalloons] = useState("NO");

  const handleReason = (e) => {
    setValueReason(e.target.value);
  };
  const handleDate = (e) => {
    setValueDate(e.target.value);
  };
  const handleTime = (e) => {
    setValueTime(e.target.value);
  };
  const handleTheme = (e) => {
    setValueTheme(e.target.value);
  };

  const customer = {
    table: numberTable,
    date: valueDate,
    time: valueTime,
    reason: valueReason,
    theme: valueTheme,
    Cake: cake,
    Balloons: balloons,
  };

  const handleTable = (e) => {
    setNumberTable(e.target.id);
  };
  console.log(customer);

  const classes = useStyle();
  return (
    <div>
      <form>
        <h2 className={classes.lable}>TABLE 5</h2>
        <div className={classes.inputsDiv}>
          <div className={classes.selectDiv}>
            <div className={classes.divSelect}>
              <label className={classes.lable}>DATE</label>
              <br />
              <input
                type={"date"}
                className={classes.select}
                onChange={handleDate}
                required
              />
            </div>
          </div>
          <div className={classes.selectDiv}>
            <div className={classes.divSelect}>
              <label className={classes.lable}>TIME</label>
              <br />
              <input
                type={"time"}
                className={classes.select}
                onChange={handleTime}
                required
              />
            </div>
          </div>
        </div>
        <div className={classes.inputsDiv}>
          <div className={classes.selectDiv}>
            <div className={classes.divSelect}>
              <label className={classes.lable}>OCCASION</label>
              <br />
              <select
                className={classes.select}
                onChange={handleReason}
                required
              >
                <option value={"NO OCCASION"}>NO OCCASION</option>
                <option value={"BIRTHDAY"}>BIRTHDAY</option>
                <option value={"ANNIVERSARY"}>ANNIVERSARY</option>
              </select>
            </div>
          </div>
          <div className={classes.selectDiv}>
            <div className={classes.divSelect}>
              <label className={classes.lable}>THEME</label>
              <br />
              <select
                className={classes.select}
                onChange={handleTheme}
                required
              >
                <option value={"NO THEME"}>NO THEME</option>
                <option value={"HEART"}>HEART</option>
                <option value={"HBD"}> HBD</option>
                <option value={"I LOVE YOU"}>I LOVE YOU</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          {valueReason === ClickCelebrate1 && (
            <div className={classes.celebrateDiv}>
              <div>
                <span style={{ fontWeight: "bold" }}>CAKE</span>
                <input
                  type={"checkbox"}
                  value={"YES"}
                  onClick={(e) => {
                    setCake(e.target.value);
                  }}
                />
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>BALOONS</span>
                <input
                  type={"checkbox"}
                  value={"YES"}
                  onClick={(e) => {
                    setBalloons(e.target.value);
                  }}
                />
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>NONE</span>
                <input type={"checkbox"} />
              </div>
            </div>
          )}
          {valueReason === ClickCelebrate2 && (
            <div className={classes.celebrateDiv}>
              <div>
                <span style={{ fontWeight: "bold" }}>CAKE</span>
                <input
                  type={"checkbox"}
                  value={"YES"}
                  onClick={(e) => {
                    setBalloons(e.target.value);
                  }}
                />
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>BALOONS</span>
                <input
                  type={"checkbox"}
                  value={"YES"}
                  onClick={(e) => {
                    setBalloons(e.target.value);
                  }}
                />
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>NONE</span>
                <input type={"checkbox"} />
              </div>
            </div>
          )}
        </div>
        <div>
          <ButtonBase className={classes.Button} id="5" onClick={handleTable}>
            RESERV
          </ButtonBase>
        </div>
      </form>
    </div>
  );
};

export default Table5;
