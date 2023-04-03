import React from "react";
import { useLocalContext } from "../../context/context";
import { Avatar, Button, Dialog, Slide, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./style.css";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function JoinClass() {
  const { joinClassDialog, setJoinClassDialog } = useLocalContext();
  return (
    <div>
      <Dialog
        fullScreen
        open={joinClassDialog}
        onClose={() => setJoinClassDialog(false)}
        TransitionComponent={Transition}
      >
        <div className="joinClass">
          <div className="joinClass__wrapper">
            <div
              className="joinClass__wraper2"
              onClick={() => setJoinClassDialog(false)}
            >
              <Close className="joinClass__svg" />
              <div className="joinClass__topHead">Join Class</div>
            </div>
            <Button
              className="joinClass__btn"
              variant="contained"
              color="primary"
            >
              Join
            </Button>
          </div>
          <div className="joinClass__form">
            <p className="joinClass__formText">You're currently signed in as</p>
            <div className="joinClass__loginInfo">
              <div className="joinClass__classLeft">
                <Avatar />
                <div className="joinClass__loginText">
                  <div className="joinClass__loginName">Nghia Tran</div>
                  <div className="joinClass__loginEmail">Nghia@gmail.com</div>
                </div>
              </div>
              <Button variant="outlined" color="primary">
                Logout
              </Button>
            </div>
          </div>
          <div className="joinClass__form">
            <div
              style={{ fontSize: "1.25rem", color: "#3c4043" }}
              className="joinClass__formText"
            >
              Class Code
            </div>
            <div
              style={{ color: "#3c4043", marginTop: "-5px" }}
              className="joinClass__formText"
            >
              Ask your teacher for the class code, then enter it here.
            </div>
            <div className="joinClass__loginInfo">
              <TextField
                id="outlined-basic"
                label="Class Code"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Owner's email"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
