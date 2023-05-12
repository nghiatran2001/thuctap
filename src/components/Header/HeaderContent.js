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
import { Apps } from "@mui/icons-material";
import CreateClass from "../CreateClass/CreateClass";
import { useLocalContext } from "../../context/context";
import JoinClass from "../JoinClass/JoinClass";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

export default function HeaderContent({ children }) {
  const [anchorE1, setAnchorE1] = React.useState(null);

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
            <Link to="/" className="link_header1">
              <img
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                alt="Classroom"
              />
              <Typography variant="6" className="title">
                Lớp học
              </Typography>
            </Link>
            <Link to="/main" className="link_header">
              <Typography variant="6" className="title1">
                Bảng tin
              </Typography>
            </Link>
            <Link to="/tuluan" className="link_header">
              <Typography variant="6" className="title1">
                Tự luận
              </Typography>
            </Link>
            <Link to="/tuluan" className="link_header">
              <Typography variant="6" className="title1">
                Trắc nghiệm
              </Typography>
            </Link>
          </div>
          <div className="header_wrapper_right">
            <Apps className="icon" />
            <Menu
              id="simple-menu"
              anchorEl={anchorE1}
              keepMounted
              open={Boolean(anchorE1)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Tham gia lớp</MenuItem>
              <MenuItem onClick={handleCreate}>Tạo lớp</MenuItem>
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
