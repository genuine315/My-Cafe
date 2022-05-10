import React from "react";
import { connect } from "react-redux";

const ReduxComponent12 = (props) => {
  const styleH1 = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: "#fff",
    direction: "ltr",
    fontSize: "22px",
    
  };

  return (
    <div style={{border:"5px solid #fff"}}>
      <p style={styleH1}>
        in this time title is <span style={{ color: "blue" }}>{props.state}</span>
      </p>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return {state}
}

export default connect(mapStateToProps)(ReduxComponent12);
