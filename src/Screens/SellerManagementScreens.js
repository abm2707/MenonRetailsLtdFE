import { Button } from "@headlessui/react";
import React from "react";
import HeaderV002 from "../containers/HeaderV002";
import { useNavigate } from "react-router-dom";
import SellerRegPortal from "./SellerRegPortal";

function SellerManagement() {
    const nav = useNavigate();

    return (
        <>
         <HeaderV002 />
            <div className="ml-4">
            <h2 className="text-lg font-serif mb-3 text-black">Seller On-Boarding</h2>
                <div className="border border-cyan-100 flex gap-3 bg-cyan-50 h-60 rounded-lg w-[98%]">
                    <div className="space-x-4 borde w-[50%] h-44 rounded-2xl shadow-2xl shadow-neutral-300 bg-white mt-6 ml-2 shadow-lg">
                        <Button
                            className="w-32 h-24 bg-white shadow-lg rounded-lg p-1 m-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={handleNewSellerRegistration}
                        >
                            Register New sellers
                        </Button>
                        <Button
                            className="w-32 h-24 bg-white shadow-lg rounded-lg p-1 m-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={() => alert("View Sellers clicked")}
                        >
                            Seller Requests - Awaiting Approval
                        </Button>
                        <Button
                            className="w-32 h-24 bg-white shadow-lg rounded-lg p-1 m-1 cursor-pointer hover:shadow-xl transform transition-all duration-300"
                            onClick={() => alert("Delete Seller clicked")}
                        >
                            Seller Validations
                        </Button>
                    </div>
                    <div className="border border-gray-400 h-32 m-10 ml-32">

                    </div>
                    <div className="bg-white w-[25%] h-44 rounded-xl shadow-2xl shadow-gray-600 ml-10 mt-6 ml-2">
                    <p className="font-serif ml-20 mt-6"> Inventory Summary</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="h-48 w-[50%] ml-10 mt-10 bg-slate-100 border-red-700 rounded-3xl p-6 shadow-2xl flex-col">
                        SEARCH & FILTER<br></br>
                        -------------<br></br>
                        <div className="flex gap-6">
                        <select className="w-[20%] rounded-xl h-8"><option>--Select-- </option></select>
                        <select className="w-[20%] rounded-xl h-8"> <option>--Select-- </option> </select>
                        <select className="w-[20%] rounded-xl h-8"> <option>--Select-- </option> </select>
                        </div>
                        <Button className="border border-black bg-gray-400 rounded-xl w-[15%] ml-80 mt-10">Search</Button>
                    </div>
                    <div className="h-48 w-[40%] ml-10 mt-10 bg-slate-100 border-red-700 rounded-3xl p-6 shadow-2xl flex-col">
                        Order History & Inventory Management<br></br>
                        -------------<br></br>
                        <div className="flex border">
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-2xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            Order History
                        </Button>
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            Inventory Management
                        </Button>
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            Claims Settlements
                        </Button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex">
            <div className="h-48 w-[30%] ml-10 mt-10 bg-slate-100 border-red-700 rounded-3xl p-6 shadow-2xl flex-col">
                Performance and Compliance<br></br>
                        -------------<br></br>
                        <div className="flex border">
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-2xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            Performance Metrics
                        </Button>
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            Compliance
                        </Button>
                        </div>
                    </div>
                    <div className="h-48 w-[40%] ml-10 mt-10 bg-slate-100 border-red-700 rounded-3xl p-6 shadow-2xl flex-col">
                Notifications & Security<br></br>
                        -------------<br></br>
                        <div className="flex border">
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-2xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            Email Alerts
                        </Button>
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            SMS Alerts
                        </Button>
                        <Button
                            className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={() => alert("Add Seller clicked")}
                        >
                            Multi Factor Authentication
                        </Button>
                        </div>
                    </div>
            </div>
        </>
    );

    function handleNewSellerRegistration(){
        nav('/SellerRegPortal');
    }

}

export default SellerManagement;
