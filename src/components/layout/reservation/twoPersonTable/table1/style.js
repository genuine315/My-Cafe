import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  item: {
    background: "#fff",
    flex: "1",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  lable: {
    fontWeight: "bolder",
    color: "#B3541E",
  },
  inputsDiv: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  selectDiv: {
    flex: "1",
  },
  divSelect: {
    margin: "auto",
    width: "80%",
  },
  select: {
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
    cursor:"pointer"
  },
  Button: {
    width: "100px",
    background: " linear-gradient(0deg, #9d5c0d 0%, #cc9900 19%, #ffd042 84%)",
    padding: "10px 20px",
    borderRadius: "10px",
    margin: "20px 0 10px 0",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
    border: "none",
    cursor: "pointer",
    fontFamily: "Oranienbaum",
    fontSize: "20px",
    fontWeight: "600",
    color: "#000",
  },
  celebrateDiv: {
    border: "1px solid #aaa",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
});
export default useStyle;
