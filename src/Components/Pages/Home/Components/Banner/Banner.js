/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import banner from "~/Assets/Images/banner.png"
import classNames from 'classnames/bind';
import style from "./banner.module.css"

const cx = classNames.bind(style)

function Banners() {
  
  const mystyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
    <div>
      <div className="p-0 m-0" style={mystyle}>
        <div className="text-dark text-center rgba-stylish-strong py-5 px-4">
          <div className={cx('py-5', 'font-wed')}>
            <h5 className="h5 orange-text"><i className="fa fa-camera-retro"></i>Le Khac Thien</h5>
            <h2 className="card-title h2 my-4 py-2">"Sale All Products - Today"</h2>
            <Link to="/shop" className={cx('btn', 'btn-custom', 'text-white')}>Shop Now</Link>
            </div>
          </div>
      </div>

      <div className={cx('banner', 'text-center', 'bg-banner','text-uppercase','p-2')}>
        <p className={cx('mb-0')}>
          free shipping worldwide 
        </p>
      </div>
    </div>
  );
}

export default Banners