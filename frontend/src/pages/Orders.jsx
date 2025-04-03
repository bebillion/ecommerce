import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = 1; // tetsing with a static userId, replace with dynamic userId as needed
        const response = await axios.get(`http://localhost:3000/api/orders/${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Your Orders</h1>
        {orders.length === 0 ? (
          <p className="text-center text-gray-700">No orders found.</p>
        ) : (
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="mb-4 p-4 border rounded">
                <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Total:</strong> ${order.total}</p>
                <p><strong>Coupon:</strong> {order.coupon || "None"}</p>
                <ul>
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Orders;
