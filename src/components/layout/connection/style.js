import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(500)]: {
      justifyContent:"center",
     },
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    padding: "30px",
    
  },
  text: {
    [theme.breakpoints.down(500)]: {
     fontSize:"15px"
    },
    [theme.breakpoints.down(400)]: {
     fontSize:"12px"
    },
    [theme.breakpoints.down(900)]: {
     width:"90%"
    },
    [theme.breakpoints.down(400)]: {
     fontSize:"12px"
    },
    width:"60%",
    backgroundColor: "rgba(0,0,0,0.4)",
    margin: "20px 0",
    padding: "10px 20px",
    textAlign: "center",
    color: "#fff", fontSize: "20px"
  },
  inputs: {
    [theme.breakpoints.down(1000)]: {
      width:"45%"
     },
    [theme.breakpoints.down(800)]: {
      width:"60%"
     },
    [theme.breakpoints.down(600)]: {
      width:"90%"
     },
    display: "flex",
    flexDirection: "column",
    width: "35%",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "20px",
  },
  input: {
    fontFamily: "colus",
    marginBottom: "40px",
    background: "none",
    border: "none",
    borderBottom: "1px solid #fff",
    color: "#fff",
    fontSize: "1rem",
    outline:"none"
  },
  textarea: {
    marginBottom: "20px",
    background: "none",
    border: "none",
    borderBottom: "1px solid #fff",
    color: "#fff",
    fontSize: "1rem",
    lineHeight: "1.5",
    outline:"none"
  },
  h3: {
    color: "#fff",
    margin: "0 0 5px 0",
  },
  btn: {
    direction: "rtl",
  },
  button: {
    [theme.breakpoints.down(300)]: {
      width:"80px",
      height:"30px",
      fontSize:"20px",
      margin:"auto",
      borderRadius:"5px",
      fontWeight: "900",
     },
    width: "100px",
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
    border: "1px solid #fff",
    margin: "10px",
    fontFamily: "colus",
    fontSize: "25px",
    fontWeight: "600",
    
  },
}));
export default useStyle;
