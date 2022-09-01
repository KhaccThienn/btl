/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { getUsers } from "~/Services/user.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { saveUserToLocalStorage } from "~/redux/actions/UserAction";
import Swal from "sweetalert2";

const cx = classNames.bind(style);

const initValues = {
  email: "",
  password: "",
};

const validate = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address, please re-enter!"),
  password: Yup.string().required("This field is required"),
});

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: validate,
    onSubmit: async (data) => {
      let response = await getUsers();
      let users = response.data;
      let findUser = users.filter((u) => {
        return data.email === u.email && data.password === u.password;
      });
      let user = findUser[0];
      if (user) {
        dispatch(saveUserToLocalStorage(user));
        navigate("/");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Email Or password is incorrect",
          icon: "error",
          position: "top-right",
          width: "70%",
          timer: "5000"
        });
        setError("Email Or Password Is Incorrect");
      }
    },
  });

  return (
    <div className={cx("container", "mt-5")}>
      <h3 className="text-center text-uppercase font-weight-bold">Login</h3>
      <span className={cx("err")}>{error}</span>
      <div className="">
        <form onSubmit={formik.handleSubmit} className={cx("form-submit")}>
          <div className={cx("form-submit", "mt-3")}>
            <label className="mb-0 mr-2 font-weight-bold d-block">Email Address</label>
            <input
              name="email"
              className={cx("form-control", "mt-2", "focus")}
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
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
            Đăng nhập
          </button>
        </form>
        <div className={cx("text-center", "mb-4")}>
          <span>If you don't have an account ? Register </span>
          <Link to={"/register"} className="text-decoration-none">
            Here
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;