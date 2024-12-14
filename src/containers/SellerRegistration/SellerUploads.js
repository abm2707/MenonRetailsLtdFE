import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ConfirmationPopup from '../../popUpScreens/ProceedingConfirmation';
import { useState } from 'react';

export default function SellerUploads({setShowTab}) {
    const [open, setOpen] = useState(false);
    const nav = useNavigate();

    async function GoForward() {
        //setShowTab("Registration");
        setOpen(true);
    }

    async function GoBackward() {
        setShowTab("Validations");
    }

    const handleOpen = () => {
        setOpen(true); 
    };

    const handleClosePopup = () => {
        setOpen(false); 
    };

    const handleConfirmPopup = () => {
        setOpen(false); 
        setShowTab("Registration"); 
    };

    return (
        <>
            <div className="border border-black rounded-lg w-[75%] ml-5 mt-4 p-6 bg-transparent">
                
                <div className="mb-6">
                    <h2 className="font-bold text-lg">Uploads</h2>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Business Logo (Optional)
                            <input type="file" hidden />
                        </Button>
                    </div>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Product Catalog (PDF/Excel)
                            <input type="file" hidden />
                        </Button>
                    </div>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Business Certificate
                            <input type="file" hidden />
                        </Button>
                    </div>
                    <div className="mb-4">
                        <Button variant="outlined" component="label">
                            Upload Tax Documents
                            <input type="file" hidden />
                        </Button>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="font-bold text-lg">Additional Information</h2>
                    <TextField 
                        fullWidth 
                        label="Social Media Links (Optional)" 
                        variant="outlined" 
                        className="mb-4" 
                    />
                    <TextField 
                        fullWidth 
                        label="Other Relevant Information" 
                        multiline 
                        rows={4} 
                        variant="outlined" 
                        className="mb-4" 
                    />
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
                <div>
                    {open && <ConfirmationPopup openingVal={setOpen} />}
                </div>
            </div>
        </>
    );
}
