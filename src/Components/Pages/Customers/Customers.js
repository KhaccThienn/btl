import React from "react";
import classNames from "classnames/bind";
import style from "./customer.module.css";
import { useForm } from "react-hook-form";

const cx = classNames.bind(style);

function Customers() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container p-5">
      <header>
        <p className={cx("headers", "text-center")}>Customers Care</p>
      </header>

      <div className={cx("border-custom")}></div>

      <main>
        <div
          className={cx(
            "p-5",
            "body",
            "text-center",
            "row",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <div className={cx("col-lg-6")}>
            <p className={cx("w-50")}>
              Have any questions or concerns? <br /> We’re always ready to help!
            </p>
            <div className={cx("w-50", "mt-5")}>
              <p className={cx("contact")}>Call Us At:</p>
              (+84) 392 689 213
              <br /> or send us an email to: <br />
              muzankibut112@gmail.com
            </div>
          </div>
          <div className={cx("col-lg-6")}>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={cx("d-flex", "align-items-center", "mb-2")}>
                <label className="mb-0 mr-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className={cx("form-control")}
                  {...register("name", { required: true })}
                />
              </div>
              <span className={cx("err")}>
                {errors.name?.type === "required" && <p>Name is required</p>}
              </span>

              <div className={cx("d-flex", "align-items-center", "mb-2")}>
                <label className="mb-0 mr-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className={cx("form-control")}
                  {...register("email", { required: true })}
                />
              </div>
              <span className={cx("err")}>
                {errors.email && <p>Emails is required</p>}
              </span>

              <div className={cx("d-flex", "align-items-center", "mb-2")}>
                <label className="mb-0 mr-2" htmlFor="Phone">
                  Phone
                </label>
                <input
                  id="Phone"
                  className={cx("form-control")}
                  {...register("phone", { required: true })}
                />
              </div>
              <span className={cx("err")}>
                {errors.phone && <p>Phone Number is required</p>}
              </span>

              <button
                type="submit"
                className="btn btn-block btn-outline-dark"
                href="#"
              >
                Submit
              </button>
            </form>
            
          </div>
        </div>

        <div className={cx("border-custom")}></div>

        <div className={cx("header", "mt-4")}>
          <p className={cx("headers", "text-center")}>
            Pretty Bridal Editorial
          </p>
          <div className="text-center container">
            <p className="w-50 d-inline-block">
              Find the perfect finishing touches for your wedding and bridesmaid
              dresses. From art deco jewellery to statement bridal pieces, our
              collection of wedding accessories will add the exquisite finishing
              touches. Discover the chic elegance of our hand-beaded bags, the
              lustre and sparkle of our crystal headwear and the sophisticated
              style of our jewellery.
            </p>
          </div>
        </div>

        <div className={cx("border-custom")}></div>
      </main>
    </div>
  );
}

export default Customers;
