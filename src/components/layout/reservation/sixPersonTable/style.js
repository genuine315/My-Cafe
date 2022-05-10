import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    background: theme.palette.primary.mainGradient,
    color: theme.palette.primary.contrastText,
    flex: "1",
    maxWidth: "350px",
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
