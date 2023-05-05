import "./style.css";
import { DrawerStudent } from "..";

import { Button } from "@mui/material";

export default function TuluanStudent() {
  return (
    <div>
      <DrawerStudent />
      <div className="tuluanstudent">
        <div className="tuluanstudent__wrapper">
          <div className="tuluanstudent__content"></div>
          <div className="tuluanstudent__announce">
            <div className="tuluanstudent__status">
              <li>
                <div className="tuluanstudent_content">
                  <h2>Đề 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque viverra sollicitudin quam, semper sagittis metus
                    tincidunt at. Sed eget scelerisque ex. Nullam sit amet magna
                    sapien. Aenean vitae diam vitae magna mattis luctus non ac
                    ex. Duis gravida tristique hendrerit. Sed sapien lacus,
                    fringilla vel semper at,
                  </p>
                </div>
                <div className="tuluanstudent__buttons">
                  <input variant="outlined" color="primary" type="file" />
                  <div>
                    <Button color="primary" variant="contained">
                      Nộp bài
                    </Button>
                  </div>
                </div>
              </li>
              <li>
                <div className="tuluanstudent_content">
                  <h2>Đề 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque viverra sollicitudin quam, semper sagittis metus
                    tincidunt at. Sed eget scelerisque ex. Nullam sit amet magna
                    sapien. Aenean vitae diam vitae magna mattis luctus non ac
                    ex. Duis gravida tristique hendrerit. Sed sapien lacus,
                    fringilla vel semper at,
                  </p>
                </div>
                <div className="tuluanstudent__buttons">
                  <input variant="outlined" color="primary" type="file" />
                  <div>
                    <Button color="primary" variant="contained">
                      Nộp bài
                    </Button>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
