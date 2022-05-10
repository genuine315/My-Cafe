import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  headerDiv: {
    margin: "0",
    height: "10vh",
  },
  navbarDiv: {
    margin: "0",
    height: "10vh",
  },
  header: {
    position: "fixed",
    width: "100%",
    display: "block",
  },
  navbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    listStyleType: "none",
    padding: "15px",
    margin: "0 0 0 10px",
  },
  navbarItem: {
    fontWeight: "bold",
    padding: "5px",
    borderRadius: "50px",
    border: "2px solid #fff",
    marginRight: "10px",
    transition: "0.3s",
    color: "#fff",
    "&:hover": {
      background: "#fff",
      color: "#000",
    },
  },
});
export default useStyle;
