import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(950)]: {
      padding:"20px"
    },
    [theme.breakpoints.down(850)]: {
      flexDirection:"column",
      padding:"0 20px"
    },
    display: "flex",
    justifyContent: "center",
    flexDirection:"row",
    padding: "40px",
  },
  editDiv: {
    [theme.breakpoints.down(850)]: {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      marginBottom:"40px"
    },
    [theme.breakpoints.down(500)]: {
      padding:"20px 10px"
    },
    flex: "1",
    background: "rgba(0,0,0,0.4)",
    borderRadius: "20px",
    padding: "40px",
  },
  editBox: {
    [theme.breakpoints.down(1100)]: {
      width:"80%",
      padding:"10px"
    },
    width: "70%",
    borderRadius: "10px",
    background: theme.palette.primary.mainGradient,
    color: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "30px ",
  },
  divider: {
    width: "140px",
    height: "5px",
    background: "rgba(120, 54, 0, 1)",
    borderRadius: "50px",
    margin: "-10px 0 20px",
  },
  editItem: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(120, 54, 0, 1)",
  },
  item: {
    [theme.breakpoints.down(1800)]: {
      fontSize:"14px"
    },
    [theme.breakpoints.down(1550)]: {
      fontSize:"12px"
    },
    [theme.breakpoints.down(1400)]: {
      fontSize:"10px"
    },
    [theme.breakpoints.down(1200)]: {
      fontSize:"8px",
      height:"30px"
    },
    [theme.breakpoints.down(850)]: {
      fontSize:"12px"
    },
    [theme.breakpoints.down(650)]: {
      fontSize:"8px"
    },
    [theme.breakpoints.down(450)]: {
      fontSize:"6px",
      height:"20px"
    },
    [theme.breakpoints.down(350)]: {
      fontSize:"5px",
      height:"20px"
    },
    [theme.breakpoints.down(300)]: {
      fontSize:"4px",
      height:"20px"
    },
    flex: "1",
    display: "flex",
    alignItems: "center",
    margin: "5px",
    height: "50px",
  },
  editIcon: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    
  },
  buttonEdit: {
    [theme.breakpoints.down(1300)]: {
      fontSize:"18px"
    },
    [theme.breakpoints.down(950)]: {
      fontSize:"16px"
    },
    [theme.breakpoints.down(850)]: {
      fontSize:"20px"
    },
    [theme.breakpoints.down(600)]: {
      fontSize:"16px"
    },
    [theme.breakpoints.down(500)]: {
      fontSize:"12px"
    },
    [theme.breakpoints.down(350)]: {
      fontSize:"8px"
    },
    [theme.breakpoints.down(500)]: {
      fontSize:"12px"
    },
    background:"none",
    border: "none",
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "#008e89",
    },
  },
  button: {
    [theme.breakpoints.down(850)]: {
      margin:"20px 10px 10px"
    },
    [theme.breakpoints.down(600)]: {
      fontSize:"14px"
    },
    [theme.breakpoints.down(400)]: {
      fontSize:"10px",
      padding:"8px"
    },
    padding: "10px 15px",
    background: "rgba(120, 54, 0, 1)",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    margin: "40px 10px 10px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 5px 10px 0 #444",
    fontFamily: "colus",
    fontWeight: "900",
    "&:hover": {
      background: "rgba(170, 79, 13, 1)",
    },
  },
  informaitionDiv: {
    flex: "1",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
}));
export default useStyle;
