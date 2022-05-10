import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding: "30px",
  },
  text: {
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
    backgroundColor: "rgba(0,0,0,0.4)",
    margin: "20px 0",
    padding: "10px 20px",
    textAlign: "center",
  },
  inputs: {
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    display: "flex",
    flexDirection: "column",
    width: "35%",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "20px",
  },
  input: {
    marginBottom: "40px",
    background: "none",
    border: "none",
    borderBottom: "1px solid #fff",
    color: "#fff",
    fontSize: "1rem",
  },
  textarea: {
    marginBottom: "20px",
    background: "none",
    border: "none",
    borderBottom: "1px solid #fff",
    color: "#fff",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  h3: {
    color: "#fff",
    margin: "0",
  },
  btn: {
    direction: "rtl",
  },
  button: {
    width: "100px",
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
    border: "1px solid #fff",
    margin: "10px",
    fontFamily: "Oranienbaum",
    fontSize: "25px",
    fontWeight: "600",
    
  },
}));
export default useStyle;
