import React, { useState, useEffect } from "react";
import { DrawerContent } from "..";

import "./style.css";
import { deThi as deThiAPI } from "../../API";
import { notification, Button, Modal, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Table } from "@mui/material";

export default function Tuluan() {
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [noiDung, setNoiDung] = useState("");
  const [maDe, setMaDe] = useState("");
  const [de, setDe] = useState("");
  const [listDe, setListDe] = useState([]);
  const [newDe, setNewDe] = useState("");

  //MODAL
  const showModal = (de) => {
    setIsModalOpen(true);
    setDe(de);
  };
  const showModall = (de) => {
    setIsModalOpen1(true);
    setDe(de);
  };

  const handleOk = () => {
    themNoiDung();
  };
  const handleEdit = () => {
    SuaDe();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };
  const themNoiDung = async () => {
    try {
      const result = await deThiAPI.addDeThi({
        maDe,
        noiDung,
      });

      if (result.status === 200) {
        api.open({
          type: "success",
          message: "Thêm đề tự luận thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Mã đề đã tồn tại.",
      });
    }
  };

  useEffect(() => {
    (async () => {
      await getMaDe();
    })();
  }, []);

  const getMaDe = async () => {
    try {
      const result = await deThiAPI.getDe({ de });
      setNewDe(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newDe);
  const XoaDe = async (maDe) => {
    try {
      const result = await deThiAPI.delete(maDe);
      if (result.status === 200) {
        await getList();
        api.open({
          type: "success",
          message: "Xóa đề thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Xóa đề thất bại.",
      });
      console.log(error);
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
  const SuaDe = async () => {
    try {
      const result = await deThiAPI.delete({ de });
      if (result.status === 200) {
        await getList();
        api.open({
          type: "success",
          message: "Sửa đề thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Sửa đề thất bại.",
      });
      console.log(error);
    }
  };
  return (
    <div>
      {contextHolder}
      <DrawerContent />
      <div className="tuluan">
        <div className="tuluan__wrapper">
          <div className="tuluan__content">
            <Button type="primary" htmlType="submit" onClick={showModal}>
              Thêm Đề
            </Button>
            <Modal
              title="Thêm Đề"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                className="form_addfilm"
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                style={{
                  minWidth: 600,
                }}
              >
                <Form.Item label="Mã Đề">
                  <Input
                    placeholder="Mã Đề"
                    id="text"
                    name="text"
                    value={maDe}
                    onChange={(e) => setMaDe(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Nội Dung">
                  <TextArea
                    placeholder="Nội Dung"
                    id="text"
                    name="text"
                    value={noiDung}
                    onChange={(e) => setNoiDung(e.target.value)}
                  />
                </Form.Item>
              </Form>
            </Modal>
            <Table className="tuluan_table" border="1">
              <thead>
                <tr>
                  <th>Mã đề</th>
                  <th>Nội dung đề</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {listDe.map((de) => {
                  return (
                    <tr key={de.maDe}>
                      <td>{de.maDe}</td>
                      <td>{de.noiDung}</td>
                      <td>
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={() => showModall(de.maDe)}
                        >
                          Sửa Đề
                        </Button>
                        <Modal
                          title="Sửa Đề"
                          open={isModalOpen1}
                          onOk={handleEdit}
                          onCancel={handleCancel}
                        >
                          <Form
                            className="form_addfilm"
                            labelCol={{
                              span: 4,
                            }}
                            wrapperCol={{
                              span: 14,
                            }}
                            layout="horizontal"
                            style={{
                              minWidth: 600,
                            }}
                          >
                            <Form.Item label="Mã Đề">
                              <Input
                                placeholder="Mã Đề"
                                id="text"
                                name="text"
                                value={maDe}
                                onChange={(e) => setMaDe(e.target.value)}
                              />
                            </Form.Item>
                            <Form.Item label="Nội Dung">
                              <TextArea
                                placeholder="Nội Dung"
                                id="text"
                                name="text"
                                value={noiDung}
                                onChange={(e) => setNoiDung(e.target.value)}
                              />
                            </Form.Item>
                          </Form>
                        </Modal>
                        <Button
                          type="primary"
                          danger
                          htmlType="submit"
                          onClick={() => {
                            XoaDe(de.maDe);
                          }}
                        >
                          Xóa Đề
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
