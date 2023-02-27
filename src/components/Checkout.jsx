import React, { useState } from "react";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="h2">Checkout</h2>
      <div className="div">
        <label className="label" htmlFor="name">Name:</label>
        <input className="input"
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="email">Email:</label>
        <input className="input"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="address">Address:</label>
        <input className="input"
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="city">City:</label>
        <input className="input"
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="state">State:</label>
        <input className="input"
          type="text"
          id="state"
          value={state}
          onChange={(event) => setState(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="zip">Zip:</label>
        <input className="input"
          type="text"
          id="zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="cardNumber">Card Number:</label>
        <input className="input"
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="cardExpiry">Card Expiry:</label>
        <input className="input"
          type="text"
          id="cardExpiry"
          value={cardExpiry}
          onChange={(event) => setCardExpiry(event.target.value)}
          required
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="cardCvv">Card CVV:</label>
        <input className="input"
          type="text"
          id="cardCvv"
          value={cardCvv}
          onChange={(event) => setCardCvv(event.target.value)}
          required
        />
      </div>
      <button className="button" type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
