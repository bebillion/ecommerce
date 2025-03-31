import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [report, setReport] = useState(null);
  const [newDiscountCode, setNewDiscountCode] = useState("");

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("/api/admin/report", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReport(data);
      } catch (error) {
        console.error("Error fetching admin report:", error);
      }
    };

    fetchReport();
  }, []);

  const handleGenerateDiscountCode = () => {
    const discountCode = `DISCOUNT${Math.floor(Math.random() * 10000)}`;
    setNewDiscountCode(discountCode);
    alert(`New Discount Code Generated: ${discountCode}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

        {report ? (
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Report Summary</h2>
              <p>Total Items Purchased: {report.totalItems || 0}</p>
              <p>
                Total Purchase Amount: $
                {report.totalAmount ? report.totalAmount.toFixed(2) : "0.00"}
              </p>
              <p>Total Discount Codes: {report.discountCodes?.length || 0}</p>
              <p>
                Total Discount Amount: $
                {report.discountCodes
                  ? (report.discountCodes.length * 10).toFixed(2)
                  : "0.00"}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold">Discount Codes</h2>
              <ul className="list-disc pl-6">
                {report.discountCodes?.map((code, index) => (
                  <li key={index}>{code}</li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={handleGenerateDiscountCode}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Generate Discount Code
              </button>
              {newDiscountCode && (
                <p className="mt-4 text-green-600">
                  New Discount Code: {newDiscountCode}
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700">Loading report...</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
