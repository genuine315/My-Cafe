import React from "react";
import ReduxComponent12 from "./reduxComponent12/ReduxComponent12";
import { connect } from "react-redux";

const ReduxComponent1 = (props) => {
  const styleH1 = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: "#fff",
    direction: "ltr",
    fontSize: "28px",
    fontWeight: "bolder",
  };

  return (
    <div style={{ border: "5px solid #fff", padding: "30px" }}>
      <div>
        <p style={styleH1}>
          {" "}
          in this time title is{" "}
          <span style={{ color: "blue" }}>{props.state}</span>
        </p>
      </div>
      <div>
        <ReduxComponent12 />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {state};
};

export default connect(mapStateToProps)(ReduxComponent1);
