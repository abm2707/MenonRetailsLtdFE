import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';
export default function SellerRegistrationScreen({setShowTab}){
    const nav = useNavigate();

    const businessName= useRef(null);
    const ownerName = useRef(null);
    const businessType = useRef(null);
    const phoneNumber = useRef(null);
    const address = useRef(null);
    const emailAddress = useRef(null);
    const pinZipCode = useRef(null);
    const stateRegion = useRef(null);
    const country = useRef(null);
    var savedAtDB = "";

    function GoForward(){
        setShowTab("Accounts");
       console.log(businessName.current.value)
       console.log(ownerName.current.value)
       saveSellerProfile();
    }

    async function saveSellerProfile(){
        try{
            console.log("Saving seller profile")
            const token = localStorage.getItem("jwtToken");
            if(!token){
                alert("You are not logged in. Kinly log in to continue.");
                return;
            }

            const sellerPayload = {
                businessName:businessName.current.value,
                ownerName:ownerName.current.value,
                businessType:businessType.current.value,
                phoneNumber:phoneNumber.current.value ,
                address:address.current.value,
                emailAddress:emailAddress.current.value,
                pinZipCode:pinZipCode.current.value,
                stateRegion:stateRegion.current.value,
                country:country.current.value
            }
              
            const resp = await axios.post("http://127.0.0.1:8085/register/profile", sellerPayload,
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Response from Saving Seller profile is: ", resp.data);
            var value = resp.data;
            savedAtDB = value.split(",")[1];
        }catch (error){
            console.error("Error while saving seller profile",error);
        }
    }
    
    return(
        <>
        <div className='font-bold text-gray-500 pl-10'>
            Section 1: Seller Information
        </div>
        <div className="border border-black rounded-lg h-80 w-[75%] ml-10 mt-4 bg-transparent">
            <div className="mt-10 ml-3 flex gap-3" >
                <TextField id="outlined-basic" label="Business Name" variant="outlined" inputRef={businessName}/>
                <TextField id="outlined-basic" label="Owner Name" variant="outlined" inputRef={ownerName}/>
                <TextField id="outlined-basic" label="Business Type" variant="outlined" inputRef={businessType}/>
            </div>
            <div className="mt-10 ml-3 flex gap-3">
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" inputRef={phoneNumber} />
                <TextField id="outlined-basic" label="Address" variant="outlined" inputRef={address}/>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" ref={emailAddress}/>
            </div>
            <div className="mt-10 ml-3 flex gap-3">
                <TextField id="outlined-basic" label="Pin/Zip Code" variant="outlined" inputRef={pinZipCode}/>
                <TextField id="outlined-basic" label="State/Region" variant="outlined" inputRef={stateRegion}/>
                <TextField id="outlined-basic" label="Country" variant="outlined" inputRef={country}/>
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