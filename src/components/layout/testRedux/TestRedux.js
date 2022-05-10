import React from "react";
import ReduxComponent1 from "./reduxComponent1/ReduxComponent1";
import TestRedux2 from "./TestRedux2";
import TestRedux3 from "./TestRedux3"
import { connect } from "react-redux";
import { helloTitle } from "../../../store/actions/index";
import { speakeMore } from "../../../store/actions/index";
import { byeTitle } from "../../../store/actions/index";

const TestRedux = (props) => {
  // console.log(props);

  const styleH1 = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: "#fff",
    direction: "ltr",
  };

  return (
    <div>
      <div> <TestRedux3/> </div>
      <div
        style={{
          border: "5px solid #fff",
          padding: "30px",
          width: "50%",
          margin: "20px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", height: "5vh" }}
        >
          <button
            onClick={() => {
              props.helloTitle();
            }}
          >
            HELLO
          </button>
          <button
            style={{ margin: "0 5px" }}
            onClick={() => {
              props.speakeMore();
            }}
          >
            SPEAKE MORE
          </button>
          <button
            onClick={() => {
              props.byeTitle();
            }}
          >
            BYE
          </button>
        </div>
        <div>
          <h1 style={styleH1}>
            {" "}
            in this time title is{" "}
            <span style={{ color: "red" }}>{props.state}</span>{" "}
          </h1>
        </div>
        <div>
          <ReduxComponent1 />
        </div>
      </div>
      <div>
        <TestRedux2 />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {state} ;
};

export default connect(mapStateToProps, {
  helloTitle: helloTitle,
  speakeMore: speakeMore,
  byeTitle: byeTitle,
})(TestRedux);
