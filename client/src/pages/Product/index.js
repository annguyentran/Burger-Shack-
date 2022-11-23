import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addProduct } from "../../redux/cartSlice";

const Product = ({ product }) => {
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    //dispatch(addProduct({...product, extras, price, quantity}));
  };

  return (
    <div className="container">
      <div className="left">
        <div className="imgContainer">
          <img src={product.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="title">{product.title}</h1>
        <span className="price">${price}</span>
        <p className="description">{product.desc}</p>
        <h3 className="choose">Choose the size</h3>
        <div className="sizes">
          <div className="size"onClick={() => handleSize(0)}>
            <img src="../../assets/size.png" layout="fill" alt="small  product" />
            <span className="number">Small</span>
          </div>
          <div className="size"onClick={() => handleSize(1)}>
            <img src="../../assets/size.png" layout="fill" alt="medium  product" />
            <span className="number">Medium</span>
          </div>
          <div className="size"onClick={() => handleSize(2)}>
            <img src="../../assets/size.png" layout="fill" alt="large product" />
            <span className="number">Large</span>
          </div>
        </div>
        <h3 className="choose">Choose additional ingredients</h3>
        <div className="ingredients">
          {product.extraOptions.map((option) => (
            <div className="option" key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className="checkbox"
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className="add">
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className="quantity"
          />
          <button className="button" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default Product;