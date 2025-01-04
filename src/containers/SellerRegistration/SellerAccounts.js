import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import axios from 'axios';

export default function SellerAccounts({ setShowTab }) {
    const nav = useNavigate();

    const bankAccountName = useRef(null);
    const bankAccountNumber = useRef(null);
    const ifscCode = useRef(null);
    const bankName = useRef(null);
    const branchName = useRef(null);
    const upiId = useRef(null);
    const panNumber = useRef(null);
    const taxIdentificationNumber = useRef(null);
    const stateRegion = useRef(null);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("sellerAccountsData")) || {};
        if (savedData) {
            bankAccountName.current.value = savedData.bankAccountName || "";
            bankAccountNumber.current.value = savedData.bankAccountNumber || "";
            ifscCode.current.value = savedData.ifscCode || "";
            bankName.current.value = savedData.bankName || "";
            branchName.current.value = savedData.branchName || "";
            upiId.current.value = savedData.upiId || "";
            panNumber.current.value = savedData.panNumber || "";
            stateRegion.current.value = savedData.stateRegion || "";
            taxIdentificationNumber.current.value = savedData.taxIdentificationNumber || "";
        }
    }, []);

    async function GoForward() {
        const sellerAccountsData = {
            bankAccountName: bankAccountName.current.value,
            bankAccountNumber: bankAccountNumber.current.value,
            ifscCode: ifscCode.current.value,
            bankName: bankName.current.value,
            branchName: branchName.current.value,
            upiId: upiId.current.value,
            panNumber: panNumber.current.value,
            stateRegion: stateRegion.current.value,
            taxIdentificationNumber: taxIdentificationNumber.current.value
        };
        localStorage.setItem('sellerAccountsData', JSON.stringify(sellerAccountsData));
        setShowTab("Validations");
    }

    async function GoBackward() {
        setShowTab("Registration");
    }

    async function saveSellerAccounts() {
        try {
            const token = localStorage.getItem("jwtToken");

            if (!token) {
                alert("Session expired. Kindly login to continue.");
                return;
            }

            const saveSellAccPayload = {
                bankAccountName: bankAccountName.current.value,
                bankAccountNumber: bankAccountNumber.current.value,
                ifscCode: ifscCode.current.value,
                bankName: bankName.current.value,
                branchName: branchName.current.value,
                upiId: upiId.current.value,
                panNumber: panNumber.current.value,
                stateRegion: stateRegion.current.value,
                taxIdentificationNumber: taxIdentificationNumber.current.value
            };

            /*const resp = await axios.post("http://127.0.0.1:8085/register/accounts", saveSellAccPayload, {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }); 

            console.log(resp.data);  */
        } catch (error) {
            console.log("An error occurred", error);
        } 
    } 

    return (
        <>
            <div className="border border-black rounded-lg h-80 w-[75%] ml-5 mt-4 bg-transparent">
                <div className="mt-10 ml-3 flex gap-3">
                    <TextField id="outlined-basic" label="Bank Account Name" variant="outlined" inputRef={bankAccountName} />
                    <TextField id="outlined-basic" label="Bank Account Number" variant="outlined" inputRef={bankAccountNumber} />
                    <TextField id="outlined-basic" label="IFSC Code (India)/SWIFT Code" variant="outlined" inputRef={ifscCode} />
                </div>
                <div className="mt-10 ml-3 flex gap-3">
                    <TextField id="outlined-basic" label="Bank Name" variant="outlined" inputRef={bankName} />
                    <TextField id="outlined-basic" label="Branch Name" variant="outlined" inputRef={branchName} />
                    <TextField id="outlined-basic" label="UPI ID (Optional)" variant="outlined" inputRef={upiId} />
                </div>
                <div className="mt-10 ml-3 flex gap-3">
                    <TextField id="outlined-basic" label="PAN Number (India)" variant="outlined" inputRef={panNumber} />
                    <TextField id="outlined-basic" label="State/Region" variant="outlined" inputRef={stateRegion} />
                    <TextField id="outlined-basic" label="Tax Identification Number (TIN)" variant="outlined" inputRef={taxIdentificationNumber} />
                </div>
                <div className="mt-12 ml-[50rem] hover:shadow-lg hover:scale-125 rounded-2xl border border-black"></div>
                <button className="w-32 h-10 shadow-2xl rounded-full font-serif text-blue-700" onClick={GoBackward}>
                    Back
                </button>
                <button className="w-32 h-10 shadow-2xl rounded-full font-serif text-blue-700" onClick={GoForward}>
                    Next
                </button>
            </div>
        </>
    );
}
