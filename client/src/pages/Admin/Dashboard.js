// TODO: A Dashboard where admin can check or change status of all orders. 

// import axios from "axios";
import { useState } from "react";
import axios from "axios";
const Dashboard = ({ orders, products }) => {
  const [productList, setproductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    // console.log(id);
    // try {
    //   const res = await axios.delete(
    //     "http://localhost:3000/api/products/" + id
    //   );
    //   setproductList(productList.filter((product) => product._id !== id));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleStatus = async (id) => {
    // const item = orderList.filter((order) => order._id === id)[0];
    // const currentStatus = item.status;

    // try {
    //   const res = await axios.put("http://localhost:3000/api/orders/" + id, {
    //     status: currentStatus + 1,
    //   });
    //   setOrderList([
    //     res.data,
    //     ...orderList.filter((order) => order._id !== id),
    //   ]);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="container">
      <div className="item">
        <h1 className="title">Products</h1>
        <table className="table">
          <tbody>
            <tr className="trTitle">
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {/* {productList.map((product) => (
            <tbody key={product._id}>
              <tr className="trTitle">
                <td>
                  <Image
                   src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className="button">Edit</button>
                  <button
                    className="button"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))} */}
        </table>
      </div>
      <div className="item">
        <h1 className="title">Orders</h1>
        <table className="table">
          <tbody>
            <tr className="trTitle">
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {/* {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className="trTitle">
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))} */}
        </table>
      </div>
    </div>
  );
};



export default Dashboard;