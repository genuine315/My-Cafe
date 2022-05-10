import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  itemTitle: {
    backgroundColor: "rgba(0,0,0,0.6)",
    textAlign: "center",
    margin: "5px",
    color: "rgb(0,187,255)",
    borderRadius: "10px",
  },
  item: {
    display: "flex",
  },
  itemimg: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: "1",
    background: "#fff",
    margin: "5px",
    height: "150px",
    borderRadius: "10px",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  itemContent: {
    flex: "2",
    backgroundColor: "rgba(0,0,0,0.6)",
    margin: "5px",
    height: "150px",
    color: "#fff",
    overflow: "hidden",
    borderRadius: "10px",
  },
  itemContentTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  margin15: {
    margin: "15px",
  },
});
export default useStyle;
