import React, { useState } from "react";
import useStyle from "./style";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import ModalComponenet from "./modal/ModalComponenet";
import InformationClient from "./information client/InformationClient";

const ReservePage = (props) => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [modalItem, setModalItem] = useState("");
  const [showInformatioDiv, setShowInformatioDiv] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { reserv } = useParams();

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className={classes.container}>
      <div className={classes.editDiv}>
        <div className={classes.editBox}>
          <h1>{reserv}</h1>
          <div className={classes.divider}></div>
          <div className={classes.editItem}>
            <div className={classes.item}>
              <h2>Date:</h2>
            </div>
            <div className={classes.item} style={centerStyle}>
              <h2>{props.ClientDataReducer.date}</h2>
            </div>
            <div className={classes.item}>
              <div className={classes.editIcon}>
                <button
                  className={classes.buttonEdit}
                  onClick={() => {
                    setOpen(true);
                    setModalItem("date");
                  }}
                >
                  EDIT
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.editItem}>
            <div className={classes.item}>
              <h2>time:</h2>
            </div>
            <div className={classes.item} style={centerStyle}>
              <h2>{props.ClientDataReducer.time}</h2>
            </div>
            <div className={classes.item}>
              <div className={classes.editIcon}>
                <button
                  className={classes.buttonEdit}
                  onClick={() => {
                    setOpen(true);
                    setModalItem("time");
                  }}
                >
                  EDIT
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.editItem}>
            <div className={classes.item}>
              <h2>occasion:</h2>
            </div>
            <div className={classes.item} style={centerStyle}>
              <h2>{props.ClientDataReducer.occasion}</h2>
            </div>
            <div className={classes.item}>
              <div className={classes.editIcon}>
                <button
                  className={classes.buttonEdit}
                  onClick={() => {
                    setOpen(true);
                    setModalItem("occasion");
                  }}
                >
                  EDIT
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.editItem}>
            <div className={classes.item}>
              <h2>theme:</h2>
            </div>
            <div className={classes.item} style={centerStyle}>
              <h2>{props.ClientDataReducer.theme}</h2>
            </div>
            <div className={classes.item}>
              <div className={classes.editIcon}>
                <button
                  className={classes.buttonEdit}
                  onClick={() => {
                    setOpen(true);
                    setModalItem("theme");
                  }}
                >
                  EDIT
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.editItem}>
            <div className={classes.item}>
              <h2>cake:</h2>
            </div>
            <div className={classes.item} style={centerStyle}>
              <h2>{props.ClientDataReducer.cake}</h2>
            </div>
            <div className={classes.item}>
              <div className={classes.editIcon}>
                <button
                  className={classes.buttonEdit}
                  onClick={() => {
                    setOpen(true);
                    setModalItem("cake");
                  }}
                >
                  EDIT
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.editItem}>
            <div className={classes.item}>
              <h2>balloon:</h2>
            </div>
            <div className={classes.item} style={centerStyle}>
              <h2>{props.ClientDataReducer.balloon}</h2>
            </div>
            <div className={classes.item}>
              <div className={classes.editIcon}>
                <button
                  className={classes.buttonEdit}
                  onClick={() => {
                    setOpen(true);
                    setModalItem("balloon");
                  }}
                >
                  EDIT
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>
          <div
            className={classes.editItem}
            style={{ border: "none", display: "flex", justifyContent: "end" }}
          >
            <button
              className={classes.button}
              onClick={() => {
                setShowInformatioDiv(true);
              }}
            >
              RECORD
            </button>
          </div>
        </div>
      </div>
      <ModalComponenet
        open={open}
        handleClose={handleClose}
        modalItem={modalItem}
      />
      <div className={classes.informaitionDiv}>
        {showInformatioDiv === true && <InformationClient />}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ReservePage);
