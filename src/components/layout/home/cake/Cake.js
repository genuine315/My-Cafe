import React, { useEffect, useState } from "react";
import useStyle from "./style";
import axios from "axios";

const Cake = () => {
  const [cake, setCake] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cake")
      .then((response) => {
        const data = response.data;
        setCake(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.itemTitle}>
        <h1 className={classes.title}>Cake</h1>
      </div>
      {cake.map((item) => (
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
            <p className={classes.itemContentDescription}>{item.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cake;
