import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  drawer: {},
  title: {
    padding: "10px",
    color: "#110900",
    borderLeft: "9px solid #110900",
    fontFamily: "oleo",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    background: "#110900",
    height: "2000px",
    width: "203px",
    overflow: "hidden",
    fontFamily: "oleo",
  },
  itemDrawer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    padding: "10px 0 10px 0",
  },
  powerButton:{
    padding:"5px",
    position:"absolute",
    bottom:"10px",
    left:"0"
  }
}));
export default useStyle;
