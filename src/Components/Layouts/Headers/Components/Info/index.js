import React from 'react'
import classNames from 'classnames/bind';
import style from "./info.module.css"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import {ImLocation2} from "react-icons/im"

const cx = classNames.bind(style)

function Infomation() {
  return (
    <div className={cx("bg-info", "p-2")}>
      <div className={cx("container")}>
        <div
          className={cx("row", "align-items-center", "justify-content-between")}
        >
          <div
            className={cx("phone")}
          >
            <FaPhoneSquareAlt />
            <span> (+84) 392 689 213</span>
          </div>

          <div className={cx("mailing")}>
            <MdEmail />
            <span>muzankibut112@gmail.com</span>
          </div>

          <div className={cx("address")}>
            <ImLocation2 />
            <span>Chuong My, Ha Noi, Vietnam</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infomation