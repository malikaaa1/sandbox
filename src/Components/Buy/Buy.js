import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ModalSuccess from "./ModalSuccess";
import ModalError from "./ModalError";
import "./Buy.css";

const Buy = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    name,
    lastName,
    addres,
    phone,
    cartNumber,
    setName,
    setLastName,
    setPhone,
    setAddres,
    setCartNumber,
  } = useAuth();

  return (
    <>
      <form className="buyForm">
        <Link to="/">
          <button className="back">Back to Home</button>
        </Link>
        <div className="buyContainer">
          <label className="orderForm">Order form</label>
          <label className="buyLabel">Name</label>
          <input
            className="buyInput"
            autoFocus
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="buyLabel">LastName</label>
          <input
            className="buyInput"
            autoFocus
            type="text"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label className="buyLabel">Phone number</label>
          <input
            className="buyInput"
            autoFocus
            type="text"
            value={phone}
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <label className="buyLabel">Addres</label>
          <input
            className="buyInput"
            autoFocus
            type="text"
            value={addres}
            required
            placeholder="Country/city/addres"
            onChange={(e) => {
              setAddres(e.target.value);
            }}
          />
          <div className="paymentDiv buyLabel">
            Cart number
            <img
              src="https://www.cbk.kg/cards-files/img/visa-classic.png"
              alt="elcart"
              className="buyPaymentCard"
            />
            <input
              className="buyInput"
              autoFocus
              type="text"
              value={cartNumber}
              required
              placeholder="0000 0000 0000 0000"
              onChange={(e) => {
                setCartNumber(e.target.value);
              }}
            />
          </div>
          <button
            className="buyButton"
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(true);
            }}
          >
            Buy
          </button>
        </div>
        <div className="modalWindowBuy">
          {name === "" || lastName === "" || phone === "" || addres === ""
            ? openModal && <ModalError closeModal={setOpenModal} />
            : openModal && <ModalSuccess closeModal={setOpenModal} />}
        </div>
      </form>
    </>
  );
};

export default Buy;
