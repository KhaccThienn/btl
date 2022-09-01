import React, { useEffect, useState } from "react";
import style from "./content.module.css";
import classNames from "classnames/bind"
import * as ProductServices from "~/Services/productService"
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Content() {

  const [apiData, setApiData] = useState([]);

  const getApiData = () => {
    const getData = async () => {
      const data = await ProductServices.homepage();
      setApiData(data);
    }
    getData();
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className={cx("content_header", "text-center")}>
        <h1>YEAR ROUND</h1>
        <div className={cx("border-custom")}></div>
        <small className={cx("small")}>Must Have Items</small>
      </div>
      <div className={cx("container", "mt-3")}>
        <div className={cx("row")}>
          {apiData.map((items, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Link
                  to={`/details/${items.id}`}
                  className="cursor-pointer card mb-3 shadow-sm"
                >
                  <div className={cx("")}>
                    <img className="card-img" src={items.image} alt="" />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="text-center btn btn-block">
          <Link
            to={`/shop`}
            className={cx("effect-shine", "text-dark", "h4", "view-all")}
          >
            View All Products
          </Link>
          <div className={cx("border-custom")}></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
