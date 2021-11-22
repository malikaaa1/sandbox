import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductContext";
import CircularProgress from "@mui/material/CircularProgress";
import {
  calcTotalPrice,
  calcSubPrice,
  getCountProductsInCart,
} from "../../helpers/cartFunctions";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { getCart, cart, changeProductCount, dispatch } =
    useContext(productsContext);

  useEffect(() => {
    getCart();
  }, []);

  function deleteCartProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    let filteredCart = {
      ...cart,
      products: cart.products.filter((e) => e.item.id != id),
    };
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    calcTotalPrice(cart.products);
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: filteredCart.products.length,
    });
    getCart();
  }

  return (
    <div className="cart">
      <tr><p>Shopping cart</p></tr>
      {cart.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>SubPrice</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>{elem.item.type}</td>
                  <td>
                    <img src={elem.item.image} alt="product img" />
                  </td>
                  <td>{elem.item.title}</td>
                  {elem.item.salePrice === "" ? (
                    <td>{elem.item.price}</td>
                  ) : (
                    <td>{elem.item.salePrice}</td>
                  )}
                  <td>
                    <input
                      value={elem.count}
                      type="number"
                      min="1"
                      onChange={(e) =>
                        changeProductCount(e.target.value, elem.item.id)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteCartProduct(elem.item.id, elem.item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: {calcTotalPrice(cart.products)}</h4>
          <Link to="/buyProducts">
            <button className="buy">Buy</button>
          </Link>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Cart;
