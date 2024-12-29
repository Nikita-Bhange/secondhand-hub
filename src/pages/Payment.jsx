import React, { useState } from 'react';
import UserInfo from '../components/UserInfo/UserInfo';
import jsPDF from "jspdf"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const Payment = () => {
    const [displayMessage, setDisplayMessage] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("Cash on delivery");

    const handleProceed = () => {
        setDisplayMessage(!displayMessage); // Toggles the displayMessage state
    };
    const handleDownloadInvoice = () => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text("Invoice", 10, 10);
        doc.text("Product Ordered Successfully!", 10, 20);
        doc.text(`Total Amount: ₹450.40`, 10, 30);
        doc.text(`Payment Method: ${paymentMethod}`, 10, 40);

        doc.save("invoice.pdf");
    };

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <>
        <Header/>
        <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-slate-100">
            {/* Success Message */}
            {displayMessage && (
                <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4 w-full text-center max-w-md ">
                    <h1 className="font-bold">Product Ordered Successfully!</h1>
                </div>
            )}

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row w-5/6 rounded-lg shadow-lg overflow-hidden justify-around md:justify-items-center bg-white">
          
                <div className="left lg:w-[40vw] p-6 w-full">
                    <UserInfo />
                </div>

                <div className="right md:w-[40vw] p-6 w-64">
                    <div className="flex flex-col items-center">
                        <h1 className='font-extrabold text-lg mb-2'>Bicycle</h1>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Product"
                            className="w-56 h-60 rounded-md mb-4"
                        />
                        <h1 className="text-lg font-bold mb-2">Total Amount</h1>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">₹450.40</h2>
                        <h1 className="text-lg font-bold mb-2">Used</h1>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">2 Years</h3>
                        <select
                            name="Method"
                            value={paymentMethod}
                            onChange={handlePaymentChange}
                            className="p-2 border border-gray-300 rounded-md w-full max-w-sm"
                        >
                            <option value="Cash on delivery">Cash on Delivery</option>
                            <option value="UPI payment">UPI Payment</option>
                            <option value="Credit/Debit card">Credit/Debit Card Payment</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col items-center gap-4">
                <button
                    onClick={handleProceed}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Proceed
                </button>
                {displayMessage && (
                    <button  onClick={handleDownloadInvoice}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                        Download Invoice
                    </button>
                )}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Payment;
