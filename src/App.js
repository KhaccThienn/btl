import { Route, Routes } from "react-router";

import Cart from "~/Components/Pages/Cart/Cart";
import Customers from "~/Components/Pages/Customers/Customers";
import Details from "~/Components/Pages/Details/Details";
import Home from "~/Components/Pages/Home";
import Login from "~/Components/Pages/Login/Login";
import Sale from "~/Components/Pages/Sale/Sale";
import Shop from "~/Components/Pages/Shop/Shop";
import Stockits from "~/Components/Pages/Stockits/Stockits";
import DefaultLayouts from "./Components/Layouts/DefaultLayouts";
import Register from "~/Components/Pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayouts children={<Home />} />} />
        <Route path="shop" element={<DefaultLayouts children={<Shop />} />} />
        <Route path="sale" element={<DefaultLayouts children={<Sale />} />} />
        <Route
          path="customer"
          element={<DefaultLayouts children={<Customers />} />}
        />
        <Route
          path="stockits"
          element={<DefaultLayouts children={<Stockits />} />}
        />
        <Route path="login" element={<DefaultLayouts children={<Login />} />} />
        <Route path="register" element={<DefaultLayouts children={<Register />} />} />
        <Route path="cart" element={<DefaultLayouts children={<Cart/>} />} />
        <Route
          path="details/:id"
          element={<DefaultLayouts children={<Details />} />}
        />
      </Routes>
    </>
  );
}

export default App;
