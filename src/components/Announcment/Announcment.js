import { Avatar } from "@mui/material";
import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
export default function Announcment() {
  return (
    <div>
      <div className="amt">
        <div className="amt__Cnt">
          <div className="amt__top">
            <Avatar />
            <div>Nghia@gmail.com</div>
          </div>
          <p className="amt__txt">Hello!</p>
          <img className="amt__img" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
