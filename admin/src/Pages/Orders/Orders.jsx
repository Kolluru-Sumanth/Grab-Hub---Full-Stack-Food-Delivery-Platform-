import { useState, useEffect } from 'react';
import './Orders.css';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/admin_assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while fetching orders");
    }
  };

  const statusHandler=async(event,orderId)=>{
    const response=await axios.post(url+"/api/order/status",{orderId,status:event.target.value})
    if (response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel icon" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name} x {item.quantity}
                    {idx < order.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="orrder-item-address">
                <p>{order.address.street + ','}</p>
                <p>{order.address.city + "," + order.address.state + "," + order.address.country + "," + order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">
                {order.address.phone}
              </p>
              <div>
              </div>
            </div>
            <p>Items:{order.items.length}</p>
            <p>₹{order.amount}</p>
            <select onChange={(event)=>{statusHandler(event,order._id)}} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
