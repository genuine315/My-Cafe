import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  drawer: {},
  title: {
    paddingLeft: "10px",
    color: "#110900",
    borderLeft: "9px solid #110900",
    fontFamily: "oleo",
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
}));
export default useStyle;
