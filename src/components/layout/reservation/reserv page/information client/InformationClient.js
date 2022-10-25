import React, { useState } from "react";
import useStyle from "./style";

const InformationClient = () => {
  const classes = useStyle();

  const [range, setRange] = useState(50);

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <label className={classes.lable}>your name</label>
        <input type="text" className={classes.input} />
      </div>
      <div className={classes.item}>
        <label className={classes.lable}>your phone</label>
        <input type="tel" className={classes.input} placeholder="091234567" />
      </div>
      <div className={classes.item}>
        <label className={classes.lable}>prepayment</label>
        <input
          type="range"
          className={classes.range}
          min="50"
          max="500"
          value={range}
          onChange={(e) => {
            setRange(e.target.value);
          }}
        />
        <span style={{margin:"10px auto",fontSize:"22px"}}>{range}$</span>
      </div>
      <div className={classes.item}>
        <div className={classes.btnDiv}>
          <button className={classes.button}>payment</button>
        </div>
      </div>
    </div>
  );
};

export default InformationClient;
