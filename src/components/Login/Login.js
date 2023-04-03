import { Button, Dialog, FormGroup, Slide, TextField } from "@mui/material";
import React from "react";
import "./style.css";
import { useLocalContext } from "../../context/context";
import { Close } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Login() {
  const { loginDialog, setLoginDialog } = useLocalContext();
  return (
    <div>
      <Dialog
        fullScreen
        open={loginDialog}
        onClose={() => setLoginDialog(false)}
        TransitionComponent={Transition}
      >
        <div className="form">
          <div className="form_wrapper" onClick={() => setLoginDialog(false)}>
            <Close className="joinClass__svg" />
          </div>
        </div>
        <div className="form_content">
          <div className="form_login">
            <FormGroup action="" className="form_left">
              <h2>Đăng nhập</h2>
              <div>
                <TextField
                  type="email"
                  id="filled-basic"
                  label="Email"
                  className="form_input"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  type="password"
                  id="filled-basic"
                  label="Password"
                  className="form_input"
                  variant="filled"
                />
              </div>
            </FormGroup>
            <Button className="form_btn">Login</Button>
          </div>
          <div className="form_login">
            <FormGroup action="" className="form_left">
              <h2>Đăng ký</h2>
              <div>
                <TextField
                  type="text"
                  id="filled-basic"
                  label="UserName"
                  className="form_input"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  type="email"
                  id="filled-basic"
                  label="Email"
                  className="form_input"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  type="password"
                  id="filled-basic"
                  label="Password"
                  className="form_input"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  type="password"
                  id="filled-basic"
                  label="ConfirmPassword"
                  className="form_input"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  type="phone"
                  id="filled-basic"
                  label="PhoneNumber"
                  className="form_input"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  type="date"
                  id="filled-basic"
                  label="DateofBirth"
                  className="form_input"
                  variant="filled"
                />
              </div>
            </FormGroup>
            <Button className="form_btn">Register</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
