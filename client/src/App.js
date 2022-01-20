import React, { useEffect, useState } from "react";
import Header from "./Comps/Header";
import Products from "./Comps/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Comps/Cart";
import AddProd from "./Comps/AddProd";

export default function App() {
  const [prodArr, setprodArr] = useState([]);
  const [cart, setcart] = useState([]);
  const [inp, setinp] = useState("");
  const [amount, setamount] = useState(0);
  const [active, setactive] = useState(false);
  const [total, settotal] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:1000/products", {
        method: "get",
      });
      const data = await res.json();
      setprodArr(data);
      console.log(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:1000/cart", {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();
      setcart(data);
      settotal(data.reduce((a, b) => a + Number(b.price) * Number(b.qty), 0));
      setamount(data.reduce((a, b) => a + Number(b.qty), 0));
      setactive(false);
    })();
  }, [active]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:1000/products", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ inp }),
        credentials: "include",
      });
      const data = await res.json();
      setprodArr(data);
    })();
  }, [inp]);

  const AddToCart = async (itemname) => {
    const res = await fetch(`http://localhost:1000/cart`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ itemname }),
      credentials: "include",
    });
    const data = await res.json();
    setcart(data);
    setactive(true);
  };

  const deletefromcart = async (itemname) => {
    const res = await fetch(`http://localhost:1000/cart`, {
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ itemname }),
      method: "delete",
      credentials: "include",
    });
    const data = await res.json();
    setcart(data);
    setactive(true);
  };

  return (
    <div>
      <Router>
        <Header
          prodArr={prodArr}
          setprodArr={setprodArr}
          cart={cart}
          setinp={setinp}
          amount={amount}
        />
        <Routes>
          <Route
            path="/products"
            element={
              <Products
                prodArr={prodArr}
                setcart={setcart}
                AddToCart={AddToCart}
              />
            }
          />
          <Route
            path="/"
            element={
              <Products
                prodArr={prodArr}
                setcart={setcart}
                cart={cart}
                AddToCart={AddToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                setcart={setcart}
                cart={cart}
                AddToCart={AddToCart}
                deletefromcart={deletefromcart}
                total={total}
              />
            }
          />
          <Route
            path="/addprod"
            element={<AddProd setprodArr={setprodArr} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
