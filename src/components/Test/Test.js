import React, { useState, useEffect } from "react";
import "./style.css";
import { DrawerStudent } from "..";
import { deThi as deThiAPI } from "../../API";
import { Button } from "@mui/material";

export default function TuluanStudent() {
  const keyValue = window.location.search;
  const urlParams = new URLSearchParams(keyValue);
  const maDe = urlParams.get("maDe");
  const [de, setDe] = useState("");

  useEffect(() => {
    (async () => {
      await getMaDe();
    })();
  }, []);

  const getMaDe = async () => {
    try {
      const result = await deThiAPI.getMaDe({
        maDe,
      });
      setDe(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DrawerStudent />
      <div className="test">
        <div className="test__wrapper">
          <div className="test__content"></div>
          <div className="test__announce">
            <div className="test__status">
              <li>
                <div className="test_content">
                  <h2>{de.maDe}</h2>
                  <p>{de.noiDung}</p>
                </div>
                <div className="test__buttons">
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
