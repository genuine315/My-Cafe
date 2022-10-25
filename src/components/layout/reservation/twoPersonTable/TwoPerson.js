import React from "react";
import useStyle from "./style";
import Table1 from "./table1/Table1";
import Table2 from "./table2/Table2";
import Table3 from "./table3/Table3";

const TwoPerson = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Table1 />
      </div>
      <div className={classes.item}>
        <Table2 />
      </div>
      <div className={classes.item}>
        <Table3 />
      </div>
    </div>
  );
};

export default TwoPerson;
