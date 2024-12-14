import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import InvalidCreds from "../popUpScreens/InvalidCredsScreen";
import { useState } from "react";

export default function ConfirmationPopup({ openingVal }) {
    const[errorVal,showError] = useState(false);

    function closePopup() {
        openingVal(false); 
    }

    function handleConfirmation() {
        openingVal(false);
        saveSellerRegistrationData(); 
    }

    async function saveSellerRegistrationData(){

        const sellerValidationData = localStorage.getItem('sellerValidationData');
        const sellerProfileData = localStorage.getItem('sellerValidationData');
        const sellerAccountsData = localStorage.getItem('sellerAccountsData');

        //Saving Profile Data.
        try{
            const token = localStorage.getItem('jwtToken');

            const reponse = await axios.post("http://127.0.0.1:8080/register/profile", sellerProfileData,
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
        }catch(error){
            console.log("An Error Occured", error);
            showError(true);
            return ;
        }

        //Saving Seller Accounts Data
        try{
            const token = localStorage.getItem('jwtToken');

            const reponse = await axios.post("http://127.0.0.1:8080/register/accounts", sellerAccountsData,
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
        }catch(error){
            console.log("An Error Occured", error);
            showError(true);
            return ;
        }

        //Saving SellerSeller Validations Data.
        try{
            const token = localStorage.getItem('jwtToken');
            if(!token){
                alert("Session Expired. Kindly login again to continue");
                localStorage.clear();
                return;
            }
            const reponse = await axios.post("http://127.0.0.1:8080/register/validations", sellerValidationData,
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
        }catch(error){
            console.log("An Error Occured", error);
            showError(true);
            return ;
        }

        //Saving Seller Uploads Data


    }

    return (
        <>
        <Dialog open={openingVal} onClose={closePopup} className="rounded-2xl">
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
                <p>Are you sure you want to proceed & register this as a seller?</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={closePopup} color="primary">
                    Close
                </Button>
                <Button onClick={handleConfirmation} color="secondary">
                    Yes, Proceed
                </Button>
            </DialogActions>
        </Dialog>
            {errorVal && <InvalidCreds type="Error" desc="Internal Error Occured" onClose={showError} />}
        </>
    );
}
