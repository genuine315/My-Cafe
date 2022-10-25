import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: "bolder",
    color: "#B3541E",
  },
  lable: {
    fontWeight: "bolder",
    color: "#B3541E",
    marginBottom: "0",
  },
  inputsDiv: {
    [theme.breakpoints.down(400)]: {
      flexDirection: "column",
      marginBottom: "0",
    },
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  selectDiv: {
    [theme.breakpoints.down(400)]: {
      marginBottom: "15px",
    },
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divSelect: {
    [theme.breakpoints.down(400)]: {
      display: "block",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  select: {
    [theme.breakpoints.down(400)]: {
      width: "100%",
      marginTop: "0",
    },
    width: "130px",
    border: "1px solid #522702",
    textAlign: "center",
    marginTop: "5px",
    fontWeight: "bolder",
    color: "#522702",
    borderRadius: "5px",
    padding: "5px 0",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    fontFamily: "oleo",
    cursor: "pointer",
  },
  Button: {
    [theme.breakpoints.down(400)]: {
      width: "80px",
      padding: "5px 10px",
      margin: "10px 0",
      fontSize: "16px",
      borderRadius: "5px",
    },
    width: "100px",
    background: " linear-gradient(0deg, #9d5c0d 0%, #cc9900 19%, #ffd042 84%)",
    padding: "10px 20px",
    borderRadius: "10px",
    margin: "20px 0 10px 0",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
    border: "none",
    cursor: "pointer",
    fontFamily: "colus",
    fontSize: "20px",
    fontWeight: "600",
    color: "#000",
  },
  celebrateDiv: {
    [theme.breakpoints.down(400)]: {
      fontSize: "12px",
      padding: "5px",
    },
    border: "1px solid #aaa",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));
export default useStyle;
