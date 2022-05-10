import React from "react";
import useStyle from "./style";
import Table9 from "./table9/Table9";

const TenPerson = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Table9 />
      </div>
    </div>
  );
};

export default TenPerson;
