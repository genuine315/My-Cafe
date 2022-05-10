import React, { useEffect, useState } from "react";
import useStyle from "./style";
import axios from "axios";

const FastFood = () => {
  const [fastfood, setFastfood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/fastfood")
      .then((respons) => {
        const data = respons.data;
        setFastfood(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.itemTitle}>
        <h1 className={classes.margin15}>fastfood</h1>
      </div>
      {fastfood.map((item) => (
        <div className={classes.item}>
          <div className={classes.itemimg}>
            <img src={item.image} className={classes.img} alt={""} />
          </div>
          <div className={classes.itemContent}>
            <div className={classes.itemContentTitle}>
              <h3 className={classes.margin15}>{item.title}</h3>
              <h4
                className={classes.margin15}
                style={{ color: "rgb(0,187,255)" }}
              >
                {item.price}
              </h4>
            </div>
            <p className={classes.margin15}>{item.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FastFood;
