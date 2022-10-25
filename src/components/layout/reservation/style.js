import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "10px 20px",
  },
  items: {
    [theme.breakpoints.down(350)]: {
      padding: "20px",
    },
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.4)",
    margin: "auto",
    borderRadius: "10px",
    padding: "40px",
  },
  navigatin: {
    background: theme.palette.primary.mainGradient,
    maxWidth: "250px",
    borderRadius: "10px",
    margin: "auto",
    fontFamily: "oleo",
  },
}));
export default useStyle;
