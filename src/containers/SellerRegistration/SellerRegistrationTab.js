import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function SellerRegistrationScreen({setShowTab}){
    const nav = useNavigate();

    function GoForward(){
        setShowTab("Accounts")
    }
    
    return(
        <>
        <div className='font-bold text-gray-500 pl-10'>
            Section 1: Seller Information
        </div>
        <div className="border border-black rounded-lg h-80 w-[75%] ml-10 mt-4 bg-transparent">
            <div className="mt-10 ml-3 flex gap-3" >
                <TextField id="outlined-basic" label="Business Name" variant="outlined" />
                <TextField id="outlined-basic" label="Owner Name" variant="outlined" />
                <TextField id="outlined-basic" label="Business Type" variant="outlined" />
            </div>
            <div className="mt-10 ml-3 flex gap-3">
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                <TextField id="outlined-basic" label="Address" variant="outlined" />
                <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            </div>
            <div className="mt-10 ml-3 flex gap-3">
                <TextField id="outlined-basic" label="Pin/Zip Code" variant="outlined" />
                <TextField id="outlined-basic" label="State/Region" variant="outlined" />
                <TextField id="outlined-basic" label="Country" variant="outlined" />
            </div>
            <div className='mt-12 ml-[50rem] hover:shadow-lg hover:scale-125 rounded-2xl border border-black'>
            <button className="w-32 h-10  shadow-2xl rounded-full font-serif text-blue-700" onClick={GoForward} >
                    Next
            </button>
            </div>
            
        </div>
        </>
    )

  

}