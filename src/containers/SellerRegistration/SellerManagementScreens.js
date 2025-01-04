
import { Button } from "@headlessui/react";
import React, { useState } from "react";
import HeaderV002 from "../HeaderV002";
import { useNavigate } from "react-router-dom";
import SellerRegPortal from "./SellerRegPortal";
import SellerRegTabs from "../ComponentBuildScreen/SellerRegComponents";
import NotificationsPopup from "../../popUpScreens/NotificationsPopup";
import VendorSearchScreen from "../VendorScreens/VendorSearchScreen";

function SellerManagement() {
    const nav = useNavigate();

    const [isEmailPopUpVisible, setEmailPopUp] = useState(false);
    const [isVendorPopUpVisible, setVendorPopUp] = useState(false);
    const [isSellerRegScreen, setSellerRegScreen] = useState(false);

    const handleEmailPopUp = () => {
        setEmailPopUp(true); 
    };

    const closePopUp = () => {
        setEmailPopUp(false); 
    };

    return (
        <>
            <HeaderV002 />
            <div className="ml-4">
                <h2 className="text-lg font-serif mb-3 text-black">Seller On-Boarding</h2>
                <div className="border border-cyan-100 flex gap-3 bg-cyan-50 h-60 rounded-lg w-[98%]">
                    <div className="space-x-4 borde w-[50%] h-44 rounded-2xl shadow-2xl shadow-neutral-300 bg-slate-50 mt-6 ml-2 shadow-lg">
                        <Button
                            className="w-32 h-24 bg-white shadow-lg rounded-lg p-1 m-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                            onClick={handleNewSellerRegistration}
                        >
                            Register New Vendor
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
                    <div className="bg-white w-[25%] h-44 rounded-xl shadow-2xl shadow-gray-600 ml-10 mt-6 ml-2">
                        <p className="font-serif ml-20 mt-6">Inventory Summary</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="h-48 w-[50%] ml-10 mt-10 bg-slate-100 border-red-700 rounded-3xl p-6 shadow-2xl flex-col">
                        SEARCH & FILTER<br />
                        -------------<br />
                        <div className="flex gap-6">
                            <Button
                                className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-2xl transform transition-all duration-300 m-9"
                                onClick={handlevendorView}
                            >
                                Vendor View
                            </Button>
                        </div>
                        <Button className="border border-black bg-gray-400 rounded-xl w-[15%] ml-80">Search</Button>
                    </div>
                    <div className="h-48 w-[40%] ml-10 mt-10 bg-slate-100 border-red-700 rounded-3xl p-6 shadow-2xl flex-col">
                        Order History & Inventory Management<br />
                        -------------<br />
                        <div className="flex border">
                            <Button
                                className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-2xl transform transition-all duration-300 m-9"
                                onClick={() => alert("Order History clicked")}
                            >
                                Order History
                            </Button>
                            <Button
                                className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                                onClick={() => alert("Inventory Management clicked")}
                            >
                                Inventory Management
                            </Button>
                            <Button
                                className="w-[35%] h-16 bg-white shadow-lg rounded-lg p-1 mt-2 ml-1 cursor-pointer hover:shadow-xl transform transition-all duration-300 m-9"
                                onClick={handleviewClaims}
                            >
                                Claims Settlements
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overlay and Popup Screens */}
            {isSellerRegScreen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <SellerRegTabs onClose={closeSellerRegScreen} />
                </div>
            )}
            {isEmailPopUpVisible && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <NotificationsPopup onClose={closePopUp} />
                </div>
            )}
            {isVendorPopUpVisible && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <VendorSearchScreen onClose={closeVendorView} />
                </div>
            )}
        </>
    );

    function handleNewSellerRegistration() {
        setSellerRegScreen(true);
    }

    function closeSellerRegScreen() {
        setSellerRegScreen(false);
    }

    function handleviewClaims() {
        nav("/viewClaims");
    }

    function handlevendorView() {
        setVendorPopUp(true);
    }

    function closeVendorView() {
        setVendorPopUp(false);
    }
}

export default SellerManagement;
