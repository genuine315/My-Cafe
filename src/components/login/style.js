import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "0",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.75);backdrop-filter:blur(6.0px);",
  },
  box: {
    width: "70%",
    maxWidth: "350px",
    padding: "20px",
    background: "linear-gradient(to right,#ddd, #fff, #ddd)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: "100px",
    height: "5px",
    background: "#008e89",
    borderRadius: "10px",
    marginTop: "20px",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },
  lable: {
    fontWeight: "900",
  },
  input: {
    padding: "10px 5px",
    width: "100%",
    margin: "10px auto 20px",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    background: "#eee",
    boxShadow: "0 0 20px 0 #bbb",
    fontSize: "20px",
    fontFamily: "colus",
  },
  button: {
    padding: "10px 20px",
    background: "#008e89",
    borderRadius: "4px",
    border: "1px solid #008e89",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "colus",
    boxShadow: "0 5px 20px 0 #999",
    "&:hover": {
      background: "#fff",
      color: "#008e89",
    },
  },
}));
export default useStyle;
