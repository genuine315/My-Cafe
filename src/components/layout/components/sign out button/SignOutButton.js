import React,{useState} from "react";
import { connect } from "react-redux";
import useStyle from "./style";
import { actionNoLogin } from "../../../../store/actions";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const SignOutButton = (props) => {
  const classes = useStyle();

  const [style, setStyle] = useState();

  const styleExit1 = {
    display: "none",
  };
  const styleExit2 = {
    display: "block",
  };

  const handleSignOut = () => {
    props.actionNoLogin();
  };

  return (
    <div className={classes.divExit}>
      <div
        className={classes.powerDiv}
        onMouseOut={() => {
          setStyle(styleExit1);
        }}
        onMouseMove={() => {
          setStyle(styleExit2);
        }}
        onClick={handleSignOut}
      >
        <PowerSettingsNewIcon className={classes.power} />
      </div>
      <div className={classes.exit} style={style}>
        <span>Sign out of the account</span>
      </div>
    </div>
  );
};
const mapstateToProps = (state) => {
  return { state };
};

export default connect(mapstateToProps, { actionNoLogin })(SignOutButton);
