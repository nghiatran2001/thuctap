import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { FolderOpen, PermContactCalendar } from "@mui/icons-material";
export default function JoinedClasses() {
  return (
    <div className="joined">
      <li className="joined__list">
        <div className="joined__wrapper">
          <div className="joined__container">
            <div className="joined__imgWrapper"></div>
            <div className="joined__image"></div>
            <div className="joined__content">
              <Link to="/main" className="link_joinedclasses">
                <h2>Test 1</h2>
              </Link>
              <p className="joined__owner">Nghia@gmail.com</p>
            </div>
            <Avatar
              className="joined__avatar"
              src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg"
              alt=""
            />
          </div>
          <div className="joined__bottom">
            <PermContactCalendar />
            <FolderOpen />
          </div>
        </div>
      </li>
    </div>
  );
}
