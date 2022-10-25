import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  powerDiv: {
    width: "29px",
    height: "29px",
    padding: "3px",
    background: "#eee",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8px",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      background: "#FF1E00",
      color: "#fff",
    },
  },
  divExit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  power: {
    fontSize: "20px",
    transition: "0.3s",
  },
  exit: {
    color: "#000",
    textAlign: "center",
    background: "#eee",
    padding: "2px",
    display: "none",
    fontSize: "12px",
    marginTop: "17px",
    fontFamily: "vogo",
    borderRadius: "0 50px 50px",
  },
});
export default useStyle;
