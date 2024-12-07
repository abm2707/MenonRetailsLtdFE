import { useEffect, useState } from "react";
import SellerRegistrationScreen from "./SellerRegistrationTab";
import SellerAccounts from "./SellerAccounts";
import SellerValidations from "./SellerValidations";
import SellerUploads from "./SellerUploads";
//To Push the code
export default function SellerRegTabs() {
    const [showTab, setShowTab] = useState("Registration");
    const [fade, setFade] = useState(false); 

    useEffect(()=>{
        setFade(true)
    })

    const handleTabChange = (tab) => {
        setFade(false); 
        setTimeout(() => {
            setShowTab(tab); 
            setFade(true); 
        }, 200);
    };

    return (
        <div>
            <div className="flex bg-[#FFFFFF] shadow-md font-semibold">
                <div
                    className={`${
                        showTab === "Registration" && " border-b-4 border-green-500"
                    } rounded-md w-36 mr-4 ml-6 cursor-pointer`}
                    onClick={() => handleTabChange("Registration")}
                >
                    1. Seller Profile
                </div>
                <div
                    className={`${
                        showTab === "Accounts" && " border-b-4 border-green-500"
                    } rounded-md w-36 mr-4 ml-6 cursor-pointer`}
                    onClick={() => handleTabChange("Accounts")}
                >
                    2. Accounts
                </div>
                <div
                    className={`${
                        showTab === "Validations" && " border-b-4 border-green-500"
                    } rounded-md w-36 mr-4 ml-6 cursor-pointer`}
                    onClick={() => handleTabChange("Validations")}
                >
                    3. Validations
                </div>
                <div
                    className={`${
                        showTab === "Uploads/Others" && " border-b-4 border-green-500"
                    } rounded-md w-36 mr-4 ml-6 cursor-pointer`}
                    onClick={() => handleTabChange("Uploads/Others")}
                >
                    4. Uploads/Others
                </div>
            </div>
            <div
                className={`transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
            > 
            
                {showTab == "Registration" && <div><SellerRegistrationScreen setShowTab={setShowTab}/></div>}
                {showTab == "Accounts" && <div><SellerAccounts setShowTab={setShowTab} /></div>}
                {showTab == "Validations" && <div><SellerValidations setShowTab={setShowTab}/></div>}
                {showTab == "Uploads" && <div><SellerUploads setShowTab={setShowTab}/></div>}
            </div>
        </div>
    );
}
