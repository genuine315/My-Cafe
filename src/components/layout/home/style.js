import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  background: {
    margin: "0",
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
  },
  leftDiv: {
    position: "sticky",
    top: "100px",
    width: "100%",
  },
  body: {
    display: "flex",
  },
  menu: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "0",
    },
  },
  content: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    marginTop: "35px",
    height: "110vh",
  },
}));
export default useStyle;
