/* eslint-disable no-const-assign */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import * as ProductServices from "~/Services/productService";
import styled from "./Details.module.css";
import { addToCart } from "~/redux/actions/CartAction";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
const cx = classNames.bind(styled);

function Details() {
  let { id } = useParams();
  const [apiData, setApiData] = useState({});
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const getApiData = async () => {
      const data = await ProductServices.detailsProducts(id);
      setCount(0);
      setApiData(data);
    };
    const getProd = async () => {
      const prod = await ProductServices.get()
      setProduct(prod)
    }
    getApiData();
    getProd();
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleAddToCart = (product, quantity) => {
    let item = {
      product,
      quantity,
    };
    console.log(dispatch(addToCart(item)));
    Swal.fire({
      icon: "success",
      text: "Đã thêm vào giỏ hàng",
    });
  };

  return (
    <div className="container">
      <div className="card bg-transparent border-0">
        <div className="card-body">
          <h3 className="card-title">Name: {apiData.name}</h3>
          <small>ID: {apiData.id}</small>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6">
              <div className="white-box text-center">
                <img src={apiData.image} className="img-responsive" alt="..." />
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-6">
              <h4 className="box-title">Product description</h4>
              <p>{apiData.prodDetail}</p>
              <p className="box-title h4">
                Product's Color:{" "}
                <span className=" font-weight-normal">{apiData.color}</span>
              </p>

              <h2 className="mt-1 text-success">
                ${apiData.prices}
                <small className="text-danger ml-3">
                  <del className="text-danger">${apiData.salePrices}</del>
                </small>
              </h2>
              <div
                className={cx(
                  "counters",
                  "d-flex",
                  "align-items-center",
                  "justify-content-between",
                  "text-center",
                  "w-50",
                  "mt-3",
                  "mb-3"
                )}
              >
                <AiFillMinusSquare
                  className={cx("svgg", "cursor-pointer")}
                  onClick={() => {
                    count <= 1 ? (count = 1) : setCount(count - 1);
                  }}
                />
                <div>
                  <span className={cx("form-control")}>{count}</span>
                </div>
                <AiFillPlusSquare
                  className={cx("svgg", "cursor-pointer")}
                  onClick={() => {
                    setCount(count + 1);
                  }}
                />
              </div>
              <button
                className="btn btn-outline-dark btn-rounded mr-1"
                data-toggle="tooltip"
                title=""
                data-original-title="Add to cart"
                onClick={() => handleAddToCart(apiData, count)}
              >
                <BsFillCartPlusFill />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("border-custom", "mt-2", "mb-2")}></div>

      <div className={cx("text-center")}>
        <p className={cx("text-uppercase", "header-details")}>
          product details
        </p>

        <div className={cx("details")}>
          <p>{apiData.prodDetail}</p>
        </div>
      </div>
      <div className={cx("border-custom", "mt-2", "mb-2")}></div>

      <div className={cx("text-center", "container")}>
        <p className={cx("text-uppercase", "header-details")}>Other Products</p>

        <div className={cx("details", "row", "justify-content-between")}>
          {product.map((items, index) => {
            return items.id > 8 ? (
              <div className="col-md-3" key={index}>
                <div className="card mb-3 shadow-sm">
                  <img className="card-img" src={items.image} alt="" />
                  <div className="card-body">
                    <span className={cx("card-text", "fontcontent")}>
                      {items.name}
                    </span>
                    <br />
                    <span className="text-success">${items.prices}</span>
                    <br />
                    <div className="text-center pt-2">
                      <Link
                        to={`/details/${items.id}`}
                        className="btn btn-outline-secondary"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
