import React from "react";
import useStyle from "./style";
import Table4 from "./table4/Table4";
import Table5 from "./table5/Table5";
import Table6 from "./table6/Table6";

const FourPerson = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Table4 />
      </div>
      <div className={classes.item}>
        <Table5 />
      </div>
      <div className={classes.item}>
        <Table6 />
      </div>
    </div>
  );
};

export default FourPerson;
