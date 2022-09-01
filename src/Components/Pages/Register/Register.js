/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import style from "./Register.module.css";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "~/Services/user.service";
import { Link, useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

const initialValues = {
  // trong này là mấy cái trường ở form.
  name: "",
  phone: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  // validate các trường ở đây
  name: Yup.string().required("This field is required"),
  phone: Yup.string().required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address, please re-enter!"),
  password: Yup.string()
    .required("Truong nay bat buoc phai nhap")
    .min(6, "Passwords must be at least 6 characters long"),
});

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    // giá trị khởi tạo của form
    validationSchema,
    // validate
    onSubmit: async (user) => {
      let response = await register(user);
      response.status === 201 && navigate("/login");
      // có dữ liệu r thì thêm mới thôi >
    },
  });

  return (
    <div className={cx("container", "mt-5", 'p-5')}>
      <h3
        className={cx("text-center text-uppercase font-weight-bold", "headers")}
      >
        Register
      </h3>
      <div className="">
        <form onSubmit={formik.handleSubmit} className={cx("form-submit")}>
          <div className={cx("mt-3")}>
            <label className="mb-0 mr-2 font-weight-bold">Username</label>
            <input
              name="name"
              type="text"
              placeholder="Username"
              className={cx("form-control", "mt-2", 'focus')}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {/* nếu có lỗi thì showw ở đây */}
          <span className={cx("err")}>
            {formik.errors.name ? formik.errors.name : ""}
          </span>

          <div className={cx("mt-3")}>
            <label className="mb-0 mr-2 font-weight-bold">Phone Number</label>
            <input
              placeholder="Phone Number"
              className={cx("form-control", "mt-2", "focus")}
              onChange={formik.handleChange}
              value={formik.values.phone}
              name="phone"
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.phone ? formik.errors.phone : ""}
          </span>

          <div className={cx("form-submit", "mt-3")}>
            <label className="mb-0 mr-2 font-weight-bold d-block">Email</label>
            <input
              name="email"
              type="email "
              className={cx("form-control", "mt-2", "focus")}
              onChange={formik.handleChange}
              placeholder="Email"
              value={formik.values.email}
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.email ? formik.errors.email : ""}
          </span>

          <div className={cx("mb-2", "mt-4")}>
            <label className="mb-0 mr-2 font-weight-bold d-block">
              Password
            </label>
            <input
              name="password"
              type="password"
              className={cx("form-control", "mt-2", "focus")}
              onChange={formik.handleChange}
              placeholder="Password"
              value={formik.values.password}
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.password ? formik.errors.password : ""}
          </span>
          <button
            type="submit"
            className={cx(
              "btn",
              "text-uppercase",
              "btn-button",
              "mb-5",
              "mt-3",
              "btn-block",
              "btn-outline-dark",
              "hov"
            )}
          >
            Register
          </button>
        </form>
        <div className="text-center">
          <span>Have An Account ? Login </span><Link to="/login">here</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
