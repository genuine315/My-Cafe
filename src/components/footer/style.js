import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme)=>({
  container: {
    display: "flex",
    // justifyContent: "flex-end",
    width: "300px",
  },
  footer: {
    // [theme.breakpoints.down(500)]: {
    //   justifyContent:"space-around"
    //  },
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: "10px",
    marginTop: "50px",
    marginBottom: "50px",
  },
  iconsDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
    borderRadius: "10px",
    background: "#fff",
    margin: "5px",
  },
  icon: {
    position: "relative",
    top: "2px",
  },
  developerDiv: {
    color: "#fff",
    textAlign: "center",
  },
}));
export default useStyle;
