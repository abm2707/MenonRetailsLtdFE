import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function SellerValidations({setShowTab}) {
    const nav = useNavigate();

    async function GoForward() {
        setShowTab("Uploads");
    }

    async function GoBackward() {
        setShowTab("Accounts");
    }

    return (
        <>
            <div className="border border-black rounded-lg w-[75%] ml-5 mt-4 p-6 bg-transparent">
              
                <div className="mb-6">
                    <h2 className="font-bold text-lg">Address Validation</h2>
                    <TextField 
                        fullWidth 
                        label="Business Address" 
                        variant="outlined" 
                        className="mb-4" 
                    />
                    <TextField 
                        fullWidth 
                        label="Pin/Postal Code" 
                        variant="outlined" 
                        className="mb-4" 
                    />
                </div>

                
                <div className="mb-6">
                    <h2 className="font-bold text-lg">Compliance and Policy Adherence</h2>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Proof of Business Registration
                            <input type="file" hidden />
                        </Button>
                    </div>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Bank Statement
                            <input type="file" hidden />
                        </Button>
                    </div>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Tax Clearance Certificate
                            <input type="file" hidden />
                        </Button>
                    </div>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Proof of Address
                            <input type="file" hidden />
                        </Button>
                    </div>
                    <div className="flex items-center">
                        <Checkbox />
                        <p>I agree to the platform's Terms and Conditions</p>
                    </div>
                </div>

                
                <div>
                    <h2 className="font-bold text-lg">Miscellaneous Validation</h2>
                    <TextField 
                        fullWidth 
                        label="Years of Operation" 
                        variant="outlined" 
                        className="mb-4" 
                    />
                    <TextField 
                        fullWidth 
                        label="Product/Service Category" 
                        variant="outlined" 
                        className="mb-4" 
                    />
                    <Button variant="outlined" component="label">
                        Upload License for Specific Goods/Services
                        <input type="file" hidden />
                    </Button>
                </div>

                
                <div className="mt-6 flex justify-between">
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
            </div>
        </>
    );
}
