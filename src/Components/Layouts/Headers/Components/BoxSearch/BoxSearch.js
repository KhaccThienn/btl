import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from "./box.module.css"
const cx = classNames.bind(style)

function BoxSearch({ keyWord, data, reset }) {
  return (
    <div>
      <div className={cx("box-search1", "d-lg-block", "d-none", "pt-3")}>
        <p className={cx("p-result", 'text-truncate')}>Result of: {keyWord}</p>
        {data.map((item) => {
          return (
            <Link
              className={cx("linkitem")}
              to={`/details/${item.id}`}
              onClick={reset}
            >
              <div className={cx("media", "form-item")} key={item.id}>
                <img src={item.image} alt="" className={cx("img-search")} />
                <div className="media-body">
                  <h5 className={cx("fontname")}>{item.name}</h5>
                  <small className="">
                    Color: <span className="">{item.color}</span>
                  </small>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BoxSearch