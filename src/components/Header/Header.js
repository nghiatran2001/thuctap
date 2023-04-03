import React from "react";
import "./style.css";
import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Add, Apps } from "@mui/icons-material";
import CreateClass from "../CreateClass/CreateClass";
import { useLocalContext } from "../../context/context";
import JoinClass from "../JoinClass/JoinClass";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

export default function Header({ children }) {
  const [anchorE1, setAnchorE1] = React.useState(null);
  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  const { setCreateClassDialog, setJoinClassDialog, setLoginDialog } =
    useLocalContext();

  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };
  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  };
  const handleLogin = () => {
    handleClose();
    setLoginDialog(true);
  };
  return (
    <div className="root">
      <AppBar className="appBar" position="static">
        <Toolbar className="toolBar">
          <div className="headerWrapper">
            {children}
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Classroom"
            />
            <Link to="/" className="link_header">
              <Typography variant="6" className="title">
                Classroom
              </Typography>
            </Link>
          </div>
          <div className="header_wrapper_right">
            <Add onClick={handleClick} className="icon" />
            <Apps className="icon" />
            <Menu
              id="simple-menu"
              anchorEl={anchorE1}
              keepMounted
              open={Boolean(anchorE1)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Join Class</MenuItem>
              <MenuItem onClick={handleCreate}>Create Class</MenuItem>
            </Menu>
            <div>
              <Avatar onClick={handleLogin} className="icon" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
      <Login />
    </div>
  );
}
