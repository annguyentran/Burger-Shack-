// TODO: a modal to enter customer information such as name, address, total, payment
import { useState } from "react";


const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Your total is $10.</h1>
        <div className="item">
          <label className="label">FIRST NAME AND LAST NAME</label>
          <input
            placeholder="FOO BAR"
            type="text"
            className="input"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="item">
          <label className="label">Phone Number</label>
          <input
            type="text"
            placeholder="+1 263 9853 1344"
            className="input"
          />
        </div>
        <div className="item">
          <label className="label">Address</label>
          <textarea
            rows={5}
            placeholder="Franford Ave 2012, PA"
            type="text"
            className="textarea"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
