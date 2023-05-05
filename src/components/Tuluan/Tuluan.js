import React from "react";
import { DrawerContent } from "..";
import { Link } from "react-router-dom";
import { Button, Table } from "@mui/material";
import "./style.css";

export default function Tuluan() {
  return (
    <div>
      <DrawerContent />
      <div className="tuluan">
        <div className="tuluan__wrapper">
          <div className="tuluan__content">
            <Link>
              <Button className="tuluan_btn">Thêm đề</Button>
            </Link>
            <Table className="tuluan_table" border="1">
              <tr>
                <th>Mã đề</th>
                <th>Nội dung đề</th>
                <th>Mã lớp</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Viết 1 dòng code minh chứng</td>
                <td>1</td>
                <td>
                  <Button className="tuluan_btn">Sửa đề</Button>
                  <Button className="tuluan_btn">Xóa đề</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Viết 2 dòng code minh chứng</td>
                <td>2</td>
                <td>
                  <Button className="tuluan_btn">Sửa đề</Button>
                  <Button className="tuluan_btn">Xóa đề</Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Viết 1 dòng code minh chứng</td>
                <td>1</td>
                <td>
                  <Button className="tuluan_btn">Sửa đề</Button>
                  <Button className="tuluan_btn">Xóa đề</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Viết 2 dòng code minh chứng</td>
                <td>2</td>
                <td>
                  <Button className="tuluan_btn">Sửa đề</Button>
                  <Button className="tuluan_btn">Xóa đề</Button>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
