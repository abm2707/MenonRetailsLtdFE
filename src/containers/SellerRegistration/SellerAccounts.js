import TextField from '@mui/material/TextField';
import SellerRegistrationScreen from "./SellerRegistrationTab";
import SellerValidations from './SellerValidations';
import { useNavigate } from 'react-router-dom';

export default function SellerAccounts({setShowTab}) {
    const nav = useNavigate();

    async function GoForward() {
        setShowTab("Validations")
    }
    
    async function GoBackward() {
        setShowTab("Registration")
    }

    return (
        <>
            <div className="border border-black rounded-lg h-80 w-[75%] ml-5 mt-4 bg-transparent">
                <div className="mt-10 ml-3 flex gap-3">
                    <TextField id="outlined-basic" label="Bank Account Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Bank Account Number" variant="outlined" />
                    <TextField id="outlined-basic" label="IFSC Code (India)/SWIFT Code" variant="outlined" />
                </div>
                <div className="mt-10 ml-3 flex gap-3">
                    <TextField id="outlined-basic" label="Bank Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Branch Name" variant="outlined" />
                    <TextField id="outlined-basic" label="UPI ID (Optional)" variant="outlined" />
                </div>
                <div className="mt-10 ml-3 flex gap-3">
                    <TextField id="outlined-basic" label="PAN Number (India)" variant="outlined" />
                    <TextField id="outlined-basic" label="State/Region" variant="outlined" />
                    <TextField id="outlined-basic" label="Tax Identification Number (TIN)" variant="outlined" />
                </div>
                <div className="mt-12 ml-[50rem] hover:shadow-lg hover:scale-125 rounded-2xl border border-black"></div>
                <button 
                    className="w-32 h-10 shadow-2xl rounded-full font-serif text-blue-700" 
                    onClick={GoBackward}>
                    Back
                </button>
                <button 
                    className="w-32 h-10 shadow-2xl rounded-full font-serif text-blue-700" 
                    onClick={GoForward}>
                    Next
                </button>
            </div>
        </>
    );
}
