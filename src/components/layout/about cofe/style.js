import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down(400)]: {
      padding:"0 20px"
    },
    display: "flex",
    padding: "20px",
  },
  rightPart: {
    [theme.breakpoints.down(400)]: {
      margin:"0"
    },
    flex: "1",
    height: "80vh",
    margin: "20px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftPart: {
    flex: "1",
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inforamtion: {
    [theme.breakpoints.down("sm")]: {
      position: "inherit !important",
    },
    [theme.breakpoints.up("sm")]: {
      position: "fixed",
    },
    width: "300px",
    height: "75vh",
    padding: "20px",
  },
  informationDiv: {
    width: "100%",
    background: theme.palette.primary.mainGradient,
    color: theme.palette.primary.contrastText,
    marginBottom: "30px",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  },
  item: {
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bolder",
    width: "100%",
  },
  rateDiv: {
    [theme.breakpoints.down(400)]: {
      width:"90%"
    },
    display: "flex",
    width: "60%",
    margin: "auto",
  },
  rate: {
    flex: "1",
    fontSize: "35px",
    cursor: "pointer",
    display:"flex",
  justifyContent:"center",
  alignItems:"center"
  },
  starDiv: {
    [theme.breakpoints.down(400)]: {
      width:"70%"
    },
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    background: "linear-gradient(to right,#bbb, #777 , #bbb)",
    borderRadius: "10px",
    padding: "10px 20px",
    margin: "8px",
  },
  button: {
    color: theme.palette.primary.contrastText,
    border: "1px solid #000",
    height: "25px",
    borderRadius: "5px",
    padding: "10px 5px",
    TransitionEvent: " backgroundColor 1s",
    fontFamily: "colus",
    fontSize: "20px",
    fontWeight: "600",
    boxShadow: "0 10px 10px -5px #444",
  },
  content: {
    [theme.breakpoints.down(400)]: {
      width: "100%",
    },
    width: "70%",
    backgroundColor: "rgba(0,0,0,0.6)",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  photo: {
    background: "no-repeat center/cover",
    width: "100%",
    height: "100%",
  },
  textDiv: {
    [theme.breakpoints.down(600)]: {
      padding:"5px 10px"
    },
    padding: "10px 20px",
  },
  text: {
    [theme.breakpoints.down(600)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "10px",
    },
    color: "#fff",
    fontSize: "20px",
  },
  giveUsText:{
    [theme.breakpoints.down(350)]: {
      fontSize:"18px"
    },
    margin:"0",

  }
}));
export default useStyle;
