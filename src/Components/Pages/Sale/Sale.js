/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productService from "~/Services/productService";
import styled from "./Sale.module.css";

const cx = classNames.bind(styled);

function Shop() {
  const [key, setKey] = useState("");
  const [apiData, setApiData] = useState([]);

  // const handleChange = (e) => {
  //   setKey(e.target.value);
  //   console.log(key);
  // };

  var _html = [];

  const paginate = () => {
    for (let index = 1; index <= 2; index++) {
      _html.push(
        <li className="page-item" key={index}>
          <a
            className="page-link"
            href="#"
            onClick={(e) => {
              getDatas(e, index);
              window.scrollTo(0, 0);
            }}
          >
            {index}
          </a>
        </li>
      );
    }
  };
  paginate();

  const getDatas = (e, index) => {
    e.preventDefault();
    const getData = async () => {
      const data = await productService.getAll(index);
      setApiData(data);
    };
    getData();
  };

  const [filterKey, setFilterKey] = useState("_page=1&_limit=6");

  useEffect(() => {
    const filterByKey = async (filterKey) => {
      const data = await productService.filterByColor(filterKey);
      setApiData(data);
    };
    filterByKey(filterKey);
  }, [filterKey]);

  return (
    <div className={cx("container-fluid", "p-5")}>
      <header>
        <p className={cx("headers", "text-center")}>Shop</p>
      </header>
      <div className={cx("border-custom")}></div>

      <main className={cx("mt-4")}>
        <div className="container">
          <div className="row">
            <div className={cx("col-md-3", "filter", "p-2")}>
              <div>
                <div className={cx("header")}>
                  <p>Filter By</p>
                </div>
                {/* <div className={cx("border-custom-1")}></div>
                <div className={cx("mt-3")}>
                  <p className={cx("range", "mt-3", "mb-4", "header")}>Name</p>
                  <select
                    className="custom-select"
                    defaultValue={key}
                    onChange={handleChange}
                  >
                    <option value="_order=asc">Ascending</option>
                    <option value="_order=desc">Descending</option>
                  </select>
                </div> */}
                <div className={cx("border-custom-1", "mt-3")}></div>
                <div className={cx("filter_color")}>
                  <div className={cx("header")}>
                    <p className={cx("range", "mt-3", "mb-4", "header")}>
                      Color:{" "}
                    </p>
                  </div>
                  <div className={cx("row", "justify-content-between")}>
                    <div className={cx("col-lg-6")}>
                      <span
                        className={cx("btn", "filterline")}
                        name="gun"
                        onClick={() => setFilterKey("color=Black")}
                      >
                        Black
                      </span>
                      <br />
                      <span
                        className={cx("btn", "filterline")}
                        name="achery"
                        onClick={() => setFilterKey("color=Brown")}
                      >
                        Brown
                      </span>
                      <br />
                      <span
                        className={cx("btn", "filterline")}
                        name="knife"
                        onClick={() => setFilterKey("color=Green")}
                      >
                        Green
                      </span>
                      <br />
                      <span
                        className={cx("btn", "filterline")}
                        name="backpack"
                        onClick={() => setFilterKey("color=Off White")}
                      >
                        Off White
                      </span>
                      <br />
                      <span
                        className={cx("btn", "filterline")}
                        name="backpack"
                        onClick={() => setFilterKey("color=Purple")}
                      >
                        Purple
                      </span>
                      <br />
                      <span
                        className={cx("btn", "filterline")}
                        name="backpack"
                        onClick={() => setFilterKey("color=Red")}
                      >
                        Red{" "}
                      </span>
                      <br />
                      <span
                        className={cx("btn", "filterline")}
                        name="backpack"
                        onClick={() => setFilterKey("color=White")}
                      >
                        White
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className={cx("border-custom-1", "mt-3")}></div>
              </div>
            </div>

            <div className={cx("col-md-9", "products", "p-0")}>
              <div className={cx("container", "row")}>
                {apiData.map((items, index) => {
                  return items.prices < items.salePrices ? (
                    <div className="col-md-4" key={index}>
                      <Link to={`/details/${items.id}`} className={cx("")}>
                        <div className="card mb-3 shadow-sm">
                          <img
                            className="card-img-top"
                            src={items.image}
                            alt=""
                          />
                          <div className="card-body">
                            <span className={cx("card-text", "fontcontent")}>
                              {items.name}
                            </span>
                            <br />
                            <span className="text-success">
                              <small>$ </small>
                              {items.prices}
                            </span>
                            <span className="text-danger pl-3">
                              <del>
                                <small>$ </small>
                                {items.salePrices}
                              </del>
                            </span>
                            <br />
                            <div className="text-center pt-2 d-flex">
                              <Link
                                to={`/details/${items.id}`}
                                className="btn btn-outline-secondary"
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ) : null;
                })}
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  {_html.map((items) => {
                    return items;
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
