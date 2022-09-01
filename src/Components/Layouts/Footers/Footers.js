/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import classNames from "classnames/bind";
import style from "./footer.module.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiMixcloud } from "react-icons/si";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const cx = classNames.bind(style);

function Footers() {

  return (
    <div className={cx("bg-footer")}>
      <div className={cx("container", "p-3", "text-center")}>
        <div className="row justify-content-between align-items-center">
          <div className={cx("col-lg-6", "headers", "w-10")}>
            <p className={cx("headers")}>Stay Connected</p>
            <div
              className={cx(
                "icons",
                "row",
                "container",
                "align-items-center",
                "justify-content-between"
              )}
            >
              <a
                href="https://facebook.com/le.khac.thien.311003"
                target="_blank"
                rel="noreferrer"
              >
                <GrFacebookOption />
              </a>
              <a
                href="https://github.com/KhaccThienn"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.instagram.com/khacthien03/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.mixcloud.com/nguy%E1%BB%85n-th%C3%A0nh-nam612/"
                target="_blank"
                rel="noreferrer"
              >
                <SiMixcloud />
              </a>
            </div>
          </div>

          <div className={cx("col-lg-6")}>
            <p className={cx("headers")}>Need Assistance ?</p>
            <div className={cx("contact")}>
              <p>+(84) 392 689 213</p>
              <p>muzankibut112@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={cx("copyright", "text-center", "mt-4")}>
          <p>
            <sup>
              <AiOutlineCopyrightCircle />
            </sup>
            <span> by PRETTY BRIDAL. Author: Le Khac Thien</span>
          </p>
        </div>
      </div>
      <div className="w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.06193939173065!2d105.78313719822782!3d21.04642436767232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c9e359e2a4f618c!2sB%C3%A1ch%20Khoa%20Aptech!5e1!3m2!1svi!2sus!4v1657518899479!5m2!1svi!2sus"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footers;
