import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(1300)]: {
      width: "70%",
      padding: "10px 20px",
    },
    [theme.breakpoints.down(850)]: {
      width:"350px"
     },
    [theme.breakpoints.down(500)]: {
      width:"200px"
     },
    width: "60%",
    background: theme.palette.primary.mainGradient,
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  lable: {
    [theme.breakpoints.down(950)]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "16px",
      marginTop:"20px"
    },
    marginLeft: "10px",
  },
  item: {
    [theme.breakpoints.down(1300)]: {
      width: "70%",
    },
    [theme.breakpoints.down(1100)]: {
      margin: "10px",
    },
    [theme.breakpoints.down(500)]: {
      margin: "0px",
    },
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    margin: "20px",
    fontSize: "30px",
    fontWeight: "700",
  },
  input: {
    [theme.breakpoints.down(1300)]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down(950)]: {
      padding:"5px"
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down(350)]: {
      fontSize: "12px",
    },
    width: "100%",
    border: "2px solid #522702",
    padding: "10px 5px",
    borderRadius: "50px",
    fontSize: "20px",
    fontWeight: "700",
    outline: "none",
    margin: "10px 0",
    "&:focus": {
      outline: "2px solid #522702",
    },
  },
  range: {
    [theme.breakpoints.down(500)]: {
      marginTop:"10px"
    },
    width: "100%",
    marginTop: "20px",
  },
  btnDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    [theme.breakpoints.down(1100)]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "12px",
      padding:"5px"
    },
    padding: "10px",
    borderRadius: "5px",
    fontFamily:"colus",
    fontWeight: "700",
    fontSize: "25px",
    border: "none",
    background: "#BF9742",
    cursor: "pointer",
    boxShadow: "0 5px 10px 0 #555",
    transition: "0.3s",
    "&:hover": {
      background: "#BF970a",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
}));
export default useStyle;
