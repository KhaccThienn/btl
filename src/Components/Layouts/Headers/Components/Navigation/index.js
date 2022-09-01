import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./navigation.module.css";

const cx = classNames.bind(style);

function Navigation() {

  return (
    <div className={cx("bg-navigation")}>
      <div className={cx("container", "p-3")}>
        <div
          className={cx("row", "align-items-center", "justify-content-between")}
        >
          <div className={cx("logo")}>
            <Link to="/" className="text-decoration-none">
              <span>
                <span className={cx("main_logo")}>Pretty</span>
                <span className={cx("bridal")}> Gal</span>
              </span>
            </Link>
          </div>

          <div className={cx("navigation")}>
            <nav className="navbar navbar-expand-lg p-0">
              <button
                className="navbar-toggler bg-dark"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon text-white"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                  <Link className="nav-link" to="/sale">
                    Sale
                  </Link>
                  <Link className="nav-link" to="/customer">
                    Customer Care
                  </Link>
                  <Link className="nav-link" to="/stockits">
                    StockKits
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
