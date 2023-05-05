import React from "react";
import { DrawerContent } from "..";
import "./style.css";
import { Button, Checkbox } from "@mui/material";
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
            <div className="test__status">
              <h1>Đề 1</h1>
              <li>
                <h2>Câu 1: Không phải ngôn ngữ lập trình ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ HTML</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ C++</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ C#</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: Không phải ngôn ngữ lập trình ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ HTML</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ C++</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ C#</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: Không phải ngôn ngữ lập trình ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ HTML</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ C++</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ C#</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: Không phải ngôn ngữ lập trình ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ HTML</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ C++</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ C#</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: Không phải ngôn ngữ lập trình ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ HTML</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ C++</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ C#</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: Không phải ngôn ngữ lập trình ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ HTML</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ C++</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ C#</span>
                </p>
              </li>
              <br></br>
              <li>
                <h2>Câu 1: Không phải ngôn ngữ lập trình ?</h2>
                <p>
                  <Checkbox></Checkbox> <span>A/ HTML</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>B/ C++</span>
                </p>
                <p>
                  <Checkbox></Checkbox> <span>C/ C#</span>
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
