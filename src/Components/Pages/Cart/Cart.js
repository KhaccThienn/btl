import classNames from "classnames/bind";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import style from "./Cart.module.css";

const cx = classNames.bind(style)

function Cart() {
  const carts = useSelector((state) => state.CartReducer.items);
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice);

  console.log(carts);
  return (
    <div className="container mt-5">
      <h4 className={cx("text-uppercase text-center", "header")}>Cart</h4>
      <table className="table mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">Product's Image</th>
            <th scope="col">Product's Name</th>
            <th scope="col">Product's Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item) => {
            return (
                <tr key={item.id}>
                <td className={cx("image")}>
                  <Link to={`/details/${item.id}`}>
                    <img
                      src={item.product.image}
                      alt=""
                      className={cx("image")}
                    />
                  </Link>
                  </td>
                  <td><Link to={`/details/${item.id}`} className="text-dark">{item.product.name}</Link></td>
                  <td>{item.product.prices}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.product.prices}</td>
                </tr>
              
            );
          })}
        </tbody>
      </table>
      <h4 className="font-weight-bold mb-4">Total Price : {totalPrice}</h4>
    </div>
  );
}

export default Cart;
