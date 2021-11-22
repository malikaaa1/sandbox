import axios from "axios";
import React, { createContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/cartFunctions";
export const productsContext = createContext();

const INIT_STATE = {
  products: [],
  productDetails: {},
  cartLength: getCountProductsInCart(),
  cart: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async (params) => {
    const { data } = await axios(`http://localhost:8000/products?${params}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  async function addProduct(product) {
    await axios.post("http://localhost:8000/products", product);
    getProducts();
  }

  async function getProductDetails(id) {
    const { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  }

  const clickDelete = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    getProducts();
  };

  async function editProductDetails(id, newProduct) {
    await axios.patch(`http://localhost:8000/products/${id}`, newProduct);
    getProducts();
  }

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0,
    };

    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        cartLength: state.cartLength,
        cart: state.cart,
        getProducts,
        addProduct,
        getProductDetails,
        clickDelete,
        editProductDetails,
        addProductToCart,
        getCart,
        changeProductCount,
        dispatch,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
