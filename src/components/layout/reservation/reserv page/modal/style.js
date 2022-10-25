import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(500)]: {
      width:"200px",
      top:"200px"
    },
    padding: "10px",
    background: theme.palette.primary.mainGradient,
    color: theme.palette.primary.contrastText,
    width: "300px",
    position: "relative",
    top: "300px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  },
  input: {
    width: "200px",
    padding: "5px",
    border: "1px solid #522702",
    outline: "none",
    borderRadius: "5px",
  },
  checkbox: {
    fontSize: "20px",
  },
  button: {
    width: "60px",
    padding: "5px 10px",
    border: "none",
    borderRadius: "3px",
    background: "#BF9742",
    fontFamily:"colus",
    fontSize: "18px",
    fontWeight: "700",
    margin: "20px 0 10px",
    cursor: "pointer",
    boxShadow: "0 5px 10px 0 #555",
    "&:hover": {
      background: "#BF970a",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
}));
export default useStyle;
