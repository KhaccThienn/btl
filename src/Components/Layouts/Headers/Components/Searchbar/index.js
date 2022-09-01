/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FaCartPlus, FaUserCircle } from "react-icons/fa";
import * as ProductServices from "~/Services/productService";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "./searchbar.module.css";
import BoxSearch from "../BoxSearch/BoxSearch";
import { useSelector } from "react-redux/es/hooks/useSelector";

const cx = classNames.bind(style);

function SearchBar() {
  const user = useSelector((state) => state.UserReducers.user);

  const [keyWord, setKeyWord] = useState("");
  const [showProducts, setShowProducts] = useState([]);
  const quantity = useSelector((state) => state.CartReducer.totalQty);

  const reset = () => {
    setKeyWord("");
  };

  useEffect(() => {
    const filterByKeyName = async (keyWord) => {
      const data = await ProductServices.filterByKey(keyWord);
      setShowProducts(data); //
    };

    const timeOut = setTimeout(() => {
      filterByKeyName(keyWord);
    }, 700);

    return () => {
      clearTimeout(timeOut);
    };
  }, [keyWord]);

  return (
    <div className={cx("bg-searchbar", "p-2")}>
      <div className="container">
        <div className="row justify-content-between align-items-center position-relative">
          <div className={cx("form-field", "")}>
            <MdOutlineSearch />
            <input
              type="text"
              className={cx("input")}
              placeholder="Search..."
              onChange={(e) => setKeyWord(e.target.value.trim())}
            />
          </div>
          {keyWord !== "" && (
            <BoxSearch keyWord={keyWord} data={showProducts} reset={reset} />
          )}
          <div className={cx("personal")}>
            <button className={cx("button")}>
              <div className={cx("icons")}>
                {user && <><span className="text-capitalize">{user.name}</span><Link to="/login" href="#" className="text-dark">
                  {" "}
                  <FaUserCircle />
                </Link></>}
                {!user && (
                  <Link to="/login" href="#" className="text-dark">
                    {" "}
                    <FaUserCircle />
                  </Link>
                )}
                
              </div>
            </button>

            <button className={cx("button", "ml-5")}>
              <div className={cx("icons")} id="cart">
                <Link to="/cart" className={cx("icons")}>
                  <FaCartPlus />
                  <span className={cx("pl-2")}>{quantity}</span>
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
