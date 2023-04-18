import React from "react";
import { DrawerContent } from "..";
import "./style.css";
import { Button, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { Padding } from "@mui/icons-material";

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
            <div className="test__status">
              <h1>Đề 1</h1>
              <li>
                <h2>Câu 1: 1 + 1 = mấy ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ 2</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ 3</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ 4</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: 1 + 1 = mấy ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ 2</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ 3</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ 4</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: 1 + 1 = mấy ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ 2</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ 3</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ 4</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: 1 + 1 = mấy ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ 2</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ 3</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ 4</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: 1 + 1 = mấy ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ 2</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ 3</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ 4</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: 1 + 1 = mấy ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ 2</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ 3</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ 4</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: 1 + 1 = mấy ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ 2</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ 3</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ 4</span>
                </p>
              </li>
              <br></br>
              <Button className="test_btn">Nộp bài</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
