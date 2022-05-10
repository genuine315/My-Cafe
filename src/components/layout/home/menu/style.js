import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => ({
  MenoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    alignItems: "center",
  },
  MenoLable: {
    background: theme.palette.primary.mainGradient,
    height: "20vh",
    fontWeight: "bold",
    fontSize: "35px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    color: "#522702",
  },
  MenoRow: {
    display: "flex",
  },
  MenoItemTop: {
    background: theme.palette.primary.mainGradient,
    margin: "10px",
    flex: "1",
    width: "40%",
    height: "15vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    color: "#522702",
    cursor: "pointer",
    fontSize: "22px",
    "&:hover": {
      fontSize: "20px",
      boxShadow: "inset 0 0 10px #000",
    },
  },
  MenoItemBottom: {
    background: theme.palette.primary.mainGradient,
    margin: "10px 10px 0 10px",
    flex: "1",
    width: "40%",
    height: "15vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    color: "#522702",
    cursor: "pointer",
    fontSize: "22px",
    "&:hover": {
      fontSize: "20px",
      boxShadow: "inset 0 0 10px #000",
    },
  },
}));

export default useStyle;
