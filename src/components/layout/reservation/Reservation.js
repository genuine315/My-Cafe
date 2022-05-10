import React, { useState } from "react";
import FourPerson from "./fourPersonTable/FourPerson";
import TwoPerson from "./twoPersonTable/TwoPerson";
import useStyle from "./style";
import SixPerson from "./sixPersonTable/SixPerson";
import TenPerson from "./tenPersonTable/TenPerson";
import "./style.css";

const Reservation = () => {
  const [title1, setTitle1] = useState("list active");
  const [title2, setTitle2] = useState("list");
  const [title3, setTitle3] = useState("list");
  const [title4, setTitle4] = useState("list");
  const [tabTable, setTabTable] = useState(2);

  const activeTitle1 = () => {
    setTitle1("list active");
    setTitle2("list");
    setTitle3("list");
    setTitle4("list");
    setTabTable(2);
  };
  const activeTitle2 = () => {
    setTitle1("list");
    setTitle2("list active");
    setTitle3("list");
    setTitle4("list");
    setTabTable(4);
  };
  const activeTitle3 = () => {
    setTitle1("list");
    setTitle2("list");
    setTitle3("list active");
    setTitle4("list");
    setTabTable(6);
  };
  const activeTitle4 = () => {
    setTitle1("list");
    setTitle2("list");
    setTitle3("list");
    setTitle4("list active");
    setTabTable(10);
  };

  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <div className={classes.navigatin}>
          <div className="navigation">
            <ul>
              <li className={`${title1}`} onClick={activeTitle1}>
                <div>
                  <span className="icon">
                    <img
                      src="images/171280_group_users_people_friends_icon.svg"
                      alt=""
                    />
                  </span>
                  <span className="text">2person</span>
                </div>
              </li>
              <li className={`${title2}`} onClick={activeTitle2}>
                <div>
                  <span className="icon">
                    <img src="images/group.svg" alt="" />
                  </span>
                  <span className="text">4person</span>
                </div>
              </li>
              <li className={`${title3}`} onClick={activeTitle3}>
                <div>
                  <span className="icon">
                    <img src="images/group-of-people.svg" alt="" />
                  </span>
                  <span className="text">6person</span>
                </div>
              </li>
              <li className={`${title4}`} onClick={activeTitle4}>
                <div>
                  <span className="icon">
                    <img
                      className="imgicon"
                      src="images/team-building.svg"
                      alt=""
                    />
                  </span>
                  <span className="text">10person</span>
                </div>
              </li>

              <div className="indicator"></div>
            </ul>
          </div>
        </div>
        <div>
          {tabTable === 2 && (
            <div>
              <TwoPerson />
            </div>
          )}
          {tabTable === 4 && (
            <div>
              <FourPerson />
            </div>
          )}
          {tabTable === 6 && (
            <div>
              <SixPerson />
            </div>
          )}
          {tabTable === 10 && (
            <div>
              <TenPerson />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
