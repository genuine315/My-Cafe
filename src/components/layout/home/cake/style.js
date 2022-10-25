import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  itemTitle: {
    backgroundColor: "rgba(0,0,0,0.6)",
    textAlign: "center",
    margin: "5px",
    color: "rgb(0,187,255)",
    borderRadius: "10px",
  },
  title: {
    margin: "15px",
  },
  item: {
    display: "flex",
  },
  itemimg: {
    [theme.breakpoints.down(500)]: {
      height: "100px",
    },
    [theme.breakpoints.down(400)]: {
      height: "80px",
    },
    [theme.breakpoints.down(400)]: {
      height: "60px",
    },
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: "1",
    background: "#fff",
    margin: "5px",
    height: "150px",
    borderRadius: "10px",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  itemContent: {
    [theme.breakpoints.down(500)]: {
      height: "100px",
    },
    [theme.breakpoints.down(400)]: {
      height: "80px",
    },
    [theme.breakpoints.down(400)]: {
      height: "60px",
    },
    flex: "2",
    backgroundColor: "rgba(0,0,0,0.6)",
    margin: "5px",
    height: "150px",
    color: "#fff",
    overflowY: "scroll",
    overflowX: "hidden",
    borderRadius: "10px",
  },
  itemContentTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  margin15: {
    [theme.breakpoints.down(500)]: {
      fontSize: "14px",
      margin: "5px",
    },
    [theme.breakpoints.down(300)]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "12px",
    },
    margin: "15px",
  },
  itemContentDescription: {
    [theme.breakpoints.down(500)]: {
      fontSize: "10px",
      margin: "5px",
    },
    [theme.breakpoints.down(300)]: {
      fontSize: "8px",
    },
    margin: "15px",
  },
}));
export default useStyle
