export function getCountProductsInCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));

  return cart ? cart.products.length : 0;
}

export function calcSubPrice(product) {
  return (
    product.count *
    (product.item.salePrice === ""
      ? product.item.price
      : product.item.salePrice)
  );
}

export function calcTotalPrice(products, cart) {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.subPrice;
  });
  // cart = {
  //   totalPrice: totalPrice,
  // };
  return totalPrice;
}

export function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }
  let newCart = cart.products.filter((elem) => elem.item.id === id);
  return newCart.length > 0 ? true : false;
}
