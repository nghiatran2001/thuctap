import React from "react";
import { DrawerContent } from "..";
import "./style.css";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div>
      <DrawerContent />
      <div className="test">
        <div className="test__wrapper">
          <div className="test__content">
            <Link to="/test1">
              <Button className="test_btn">Đề 1</Button>
            </Link>
            <Link to="/test2">
              <Button className="test_btn">Đề 2</Button>
            </Link>
          </div>

          <div className="test__announce">
            <div className="test__status"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
