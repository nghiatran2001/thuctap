import { Button, DialogActions, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form() {
  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");

  return (
    <div className="form">
      <p className="class__title">Create Class</p>
      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Tên Lớp (yêu cầu)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Phần"
          className="form__input"
          variant="filled"
          value={Section}
          onChange={(e) => setSection(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Chủ Thể"
          className="form__input"
          variant="filled"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Phòng"
          className="form__input"
          variant="filled"
          value={Room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <DialogActions>
        <Button color="primary">Create</Button>
      </DialogActions>
    </div>
  );
}
