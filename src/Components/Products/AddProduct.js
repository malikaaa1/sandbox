import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductContext";
import "./Product.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    type: "",
    brand: "",
    title: "",
    description: "",
    price: "",
    salePrice: "",
    discountInPercent: "",
    phone: "",
    image: "",
    memory: "",
    countInStock: "",
  });

  const { getProducts, addProduct } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  function handleValues(e) {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(newProduct);
  }

  function handleAddProduct() {
    addProduct(product);
    setProduct({
      type: "",
      brand: "",
      title: "",
      description: "",
      price: "",
      salePrice: "",
      discountInPercent: "",
      phone: "",
      image: "",
      memory: "",
      countInStock: "",
    });
  }
  return (
    <div className="addBlock">
      <div>Категория</div>
      <div>Категория</div>
      <span>Категория</span>
      <input
        name="type"
        placeholder="Категории..."
        type="text"
        value={product.type}
        onChange={handleValues}
      />
      <span>Brand</span>
      <input
        name="brand"
        placeholder="Телефон..."
        type="text"
        value={product.brand}
        onChange={handleValues}
      />
      <span>Название</span>
      <input
        name="title"
        placeholder="Iphone"
        type="text"
        value={product.title}
        onChange={handleValues}
      />
      <span>Модель</span>
      <input
        name="model"
        placeholder="Pro max"
        type="text"
        value={product.model}
        onChange={handleValues}
      />
      <span>Описание</span>
      <input
        name="description"
        placeholder="Здесь напишите описание вашего продукта..."
        type="text"
        value={product.description}
        onChange={handleValues}
      />
      <div>Цена</div>
      <input
        name="price"
        placeholder="6000"
        type="number"
        value={product.price}
        onChange={handleValues}
      />
      {product.type === "phone" || product.type === "Phone" ? (
        <>
          <span>Память</span>
          <input
            name="memory"
            placeholder="64"
            type="text"
            value={product.memory}
            onChange={handleValues}
          />
        </>
      ) : null}
      <span>Наличие</span>
      <input
        name="countInStock"
        placeholder="5"
        type="text"
        value={product.countInStock}
        onChange={handleValues}
      />
      <span>Изображение</span>
      <input
        name="image"
        placeholder="URL"
        type="text"
        value={product.image}
        onChange={handleValues}
      />
      <span>Номер телефона</span>
      <input
        name="phone"
        placeholder="+996____________"
        type="text"
        value={product.phone}
        onChange={handleValues}
      />
      <Link to="/">
        <Button variant="contained" color="success" onClick={handleAddProduct}>
          Добавить продукт +
        </Button>
      </Link>
    </div>
  );
};

export default AddProduct;
