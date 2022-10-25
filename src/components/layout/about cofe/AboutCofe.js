import React, { useEffect, useState } from "react";
import useStyle from "./style";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import axios from "axios";

const AboutCofe = () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rate")
      .then((response) => {
        const data = response.data;
        setInformation(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [description, setdescription] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/about")
      .then((response) => {
        const data = response.data;
        setdescription(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendpoint = () => {
    return numberRate;
  };

  const [rate1, setRate1] = useState("#fff");
  const [rate2, setRate2] = useState("#fff");
  const [rate3, setRate3] = useState("#fff");
  const [rate4, setRate4] = useState("#fff");
  const [rate5, setRate5] = useState("#fff");
  const [bgButton, setBgButton] = useState("");
  const [numberRate, setNumberRate] = useState();

  const colorRate1 = () => {
    setRate1("red");
    setRate2("#fff");
    setRate3("#fff");
    setRate4("#fff");
    setRate5("#fff");
    setNumberRate(1);
    setBgButton("red");
  };

  const colorRate2 = () => {
    setRate1("orange");
    setRate2("orange");
    setRate3("#fff");
    setRate4("#fff");
    setRate5("#fff");
    setNumberRate(2);
    setBgButton("orange");
  };

  const colorRate3 = () => {
    setRate1("yellow");
    setRate2("yellow");
    setRate3("yellow");
    setRate4("#fff");
    setRate5("#fff");
    setNumberRate(3);
    setBgButton("yellow");
  };

  const colorRate4 = () => {
    setRate1("chartreuse");
    setRate2("chartreuse");
    setRate3("chartreuse");
    setRate4("chartreuse");
    setRate5("#fff");
    setNumberRate(4);
    setBgButton("chartreuse");
  };
  const colorRate5 = () => {
    setRate1("green");
    setRate2("green");
    setRate3("green");
    setRate4("green");
    setRate5("green");
    setNumberRate(5);
    setBgButton("green");
  };

  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.rightPart}>
        <div className={classes.inforamtion}>
          <div className={classes.informationDiv}>
            <div className={classes.item}>
              <div>
                <h2 style={{ margin: "5px" }}>ORDERS</h2>
              </div>
              <div>
                <p style={{ fontSize: "20px", margin: "5px" }}>
                  {information.orders}
                </p>
              </div>
            </div>
            <div className={classes.item}>
              <div>
                <h2 style={{ margin: "5px" }}> RESERVS</h2>
              </div>
              <div>
                <p style={{ fontSize: "20px", margin: "5px" }}>
                  {information.reservs}
                </p>
              </div>
            </div>
            <div className={classes.item}>
              <div>
                <h2 style={{ margin: "5px" }}>RATE</h2>
              </div>
              <div className={classes.rateDiv}>
                
                <div className={classes.rate}>
                  <StarIcon className={classes.rate}></StarIcon>
                </div>
                <div className={classes.rate}>
                  <StarIcon className={classes.rate}></StarIcon>
                </div>
                <div className={classes.rate}>
                  <StarIcon className={classes.rate}></StarIcon>
                </div>
                <div className={classes.rate}>
                  <StarIcon className={classes.rate}></StarIcon>
                </div>
                <div className={classes.rate}>
                  <StarIcon className={classes.rate}></StarIcon>
                </div>
              </div>
              <h3 style={{margin:"0"}} >{information.rate}</h3>
            </div>
          </div>
          <div className={classes.informationDiv}>
            <div>
              <h2 className={classes.giveUsText}>YOU GIVE US POINTS</h2>
            </div>
            <div className={classes.starDiv}>
              <div>
                <StarIcon
                  className={classes.rate}
                  style={{ color: `${rate1}` }}
                  onClick={colorRate1}
                ></StarIcon>
              </div>
              <div>
                <StarIcon
                  className={classes.rate}
                  style={{ color: `${rate2}` }}
                  onClick={colorRate2}
                ></StarIcon>
              </div>
              <div>
                <StarIcon
                  className={classes.rate}
                  style={{ color: `${rate3}` }}
                  onClick={colorRate3}
                ></StarIcon>
              </div>
              <div>
                <StarIcon
                  className={classes.rate}
                  style={{ color: `${rate4}` }}
                  onClick={colorRate4}
                ></StarIcon>
              </div>
              <div>
                <StarIcon
                  className={classes.rate}
                  style={{ color: `${rate5}` }}
                  onClick={colorRate5}
                ></StarIcon>
              </div>
            </div>
            <div>
              <Button
                style={{ backgroundColor: `${bgButton}` }}
                className={classes.button}
                onClick={sendpoint}
              >
                RECORD
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.leftPart}>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img className={classes.img} src="/images/cafe2.jpg" alt="" />
          </div>
          <div className={classes.textDiv}>
            <p className={classes.text}>
              {description.history}
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img className={classes.img} src="/images/cafe1.jpg" alt="" />
          </div>
          <div className={classes.textDiv}>
            <p className={classes.text}>
              {description.about}
            </p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img
              className={classes.img}
              src="/images/Iranian-instruments.jpg"
              alt=""
            />
          </div>
          <div className={classes.textDiv}>
            <p className={classes.text}>
              {description.Quality}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCofe;
