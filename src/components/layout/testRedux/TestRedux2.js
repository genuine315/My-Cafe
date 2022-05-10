import React from 'react';
import { connect } from 'react-redux';

const TestRedux2 = (props) => {


    const styleH1 = {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        color: "#fff",
        direction: "ltr",
      };

    return (
        <div>
             <div
        style={{
          border: "5px solid #fff",
          padding: "30px",
          width: "50%",
          margin: "20px",
        }}
      >
        <h1 style={styleH1}>
          {" "}
          in this time title is <span style={{ color: "red" }}>{props.state}</span>{" "}
        </h1>
      </div>
        </div>
    );
};

const mapStateToProps =(state)=>{
    return {state}
}

export default connect(mapStateToProps)(TestRedux2);