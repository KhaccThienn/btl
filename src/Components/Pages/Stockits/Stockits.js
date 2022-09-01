import React from "react";
import classNames from "classnames/bind";
import style from "./stock.module.css";

const cx = classNames.bind(style);

function Stockits() {
  return (
    <div className={cx("container", "p-5", "text-center")}>
      <header>
        <p className={cx("headers")}>Stockits</p>
      </header>
      <main>
        <section className={cx("content")}>
          <p>Find us in these fine stores</p>
        </section>
        <div className={cx("border-custom")}></div>

        <div className={cx("stores", "text-center", "mt-5", "container")}>
          <div className={cx("name")}>
            <p>The Blues Store</p>
          </div>
          <div className={cx("address", "text-center")}>
            <p className={cx("text")}>
              500 Terry Francois Street San Francisco, CA 94158
            </p>
          </div>
          <div className={cx("telephone", "text-center", "mt-1")}>
            <p className={cx("text")}>Phone: 123.456.7890</p>
          </div>
          <div className={cx("timer", "mt-4")}>
            <p className={cx("text")}>Mon-Sat: 10:00am-7:00pm Sunday: Closed</p>
          </div>
        </div>

        <div className={cx("border-custom-1")}></div>

        <div className={cx("stores", "text-center", "mt-5", "container")}>
          <div className={cx("name")}>
            <p>Eva</p>
          </div>
          <div className={cx("address", "text-center")}>
            <p className={cx("text")}>
              500 Terry Francois Street San Francisco, CA 94158
            </p>
          </div>
          <div className={cx("telephone", "text-center", "mt-1")}>
            <p className={cx("text")}>Phone: 123.456.7890</p>
          </div>
          <div className={cx("timer", "mt-4")}>
            <p className={cx("text")}>
              Mon-Fri: 9:00am-6:00pm Sat-Sun: 10:00am-5:00pm
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Stockits;
