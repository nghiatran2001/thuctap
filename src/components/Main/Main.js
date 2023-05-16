import React, { useEffect, useState } from "react";
import { DrawerContent } from "..";
import "./style.css";
import { Avatar, Button, TextField } from "@mui/material";
import { deThi as deThiAPI } from "../../API";
import { Link } from "react-router-dom";

export default function Main() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [listDe, setListDe] = useState([]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // GET
  useEffect(() => {
    (async () => {
      await getList();
    })();
  }, []);
  const getList = async () => {
    try {
      const result = await deThiAPI.getList();
      setListDe(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DrawerContent />
      <div className="main">
        <div className="main__wrapper">
          <div className="main__content">
            <div className="main__wrapper1">
              <div className="main__bgImage">
                <div className="main__emptyStyles" />
              </div>
              <div className="main__text">
                <h1 className="main__heading main__overflow">Mạng máy tính</h1>
                <div className="main__section main__overflow">Phần A</div>
                <div className="main__wrapper2">
                  <em className="main__code">Class Code :</em>
                  <div className="main__id">1234567</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__announce">
            <div className="main__status">
              <p>Đến hạn</p>
              <p className="main__subText">12:00</p>
              <p className="main__subText">01/01/2023</p>
            </div>
            <div className="main__announcements">
              <div className="main__announcementsWrapper">
                <div className="main__ancContent">
                  {showInput ? (
                    <div className="main__form">
                      <TextField
                        id="filled-multiline-flexible"
                        multiline
                        label="Announce Something to class"
                        variant="filled"
                        value={inputValue}
                        onChange={(e) => setInput(e.target.value)}
                      />
                      <div className="main__buttons">
                        <input
                          onChange={handleChange}
                          variant="outlined"
                          color="primary"
                          type="file"
                        />
                        <div>
                          <Button onClick={() => setShowInput(false)}>
                            Cancel
                          </Button>
                          <Button color="primary" variant="contained">
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="main__wrapper100"
                      onClick={() => setShowInput(true)}
                    >
                      <Avatar />
                      <div>Hãy viết gì đó...</div>
                    </div>
                  )}
                </div>
              </div>
              {/* <Announcment /> */}
              {listDe.map((de) => {
                return (
                  <Link
                    to={`/test?maDe=${de.maDe}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="amt">
                      <div className="amt__Cnt">
                        <div className="amt__top">
                          <Avatar />
                          <div>{de.maDe}</div>
                        </div>
                        <p className="amt__txt">{de.noiDung}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
