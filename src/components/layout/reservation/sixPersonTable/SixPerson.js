import React from "react";
import useStyle from "./style";
import Table7 from "./table7/Table7";
import Table8 from "./table8/Table8";

const SixPerson = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Table7 />
      </div>
      <div className={classes.item}>
        <Table8 />
      </div>
    </div>
  );
};

export default SixPerson;
