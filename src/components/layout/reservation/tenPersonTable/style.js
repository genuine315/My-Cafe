import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
  },
  item: {
    background: theme.palette.primary.mainGradient,
    color: theme.palette.primary.contrastText,
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
}));
export default useStyle;
