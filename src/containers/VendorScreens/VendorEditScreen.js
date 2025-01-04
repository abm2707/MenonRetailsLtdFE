import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InvalidCreds from '../../popUpScreens/InvalidCredsScreen';

function VendorEditScreen({onClose, vendorData}) {

  let [vendorValues,setVendorValues] = useState();
  let currentDate = new Date().toISOString().split('T')[0];
  let [isNotifyPopUp,setNotifyPopup] = useState(false);
  

  useEffect(()=> {
    setVendorValues(vendorData)
  },[vendorData])

  useEffect(()=>{
    console.log(vendorValues)
  },[vendorValues])

  function saveVendor(){
    try{
      const response = axios.post("http://127.0.0.1:8085/vendor/saveVendor", vendorValues,
        {
          headers:{
            "Content-Type": 'application/json'
          },
        }
      )
      setNotifyPopup(true);
    }catch(error){
      console.error("Error Encountered", error);
      return;
    }
  }
  
  function handleClosing(){
    setNotifyPopup(false);
    onClose();
  }

  function closingMain(){

  }

  function handleOnChange(e,param){
    setVendorValues((prevValues)=> {
      if(param == 'entity'){
        return {
          ...prevValues,
          entity: e.target.value,
          modifiedDate: currentDate,
        }
      }  else if (param == 'vendorName'){
        return{
          ...prevValues,
          vendorName: e.target.value,
          modifiedDate: currentDate,
        }
      }  else if (param === "vendorPayterm") {
        console.log('Inside vendor pay term')
        return {
          ...prevValues,
          modifiedDate: currentDate,
          vendorPayterm: e.target.value, 
        }
      } else {
        return prevValues;
      }
      console.log('Data is ', currentDate)
    })
  }

  return (
    <>
    <p></p>
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 w-[70%] h-[50%] rounded-2xl m-20 gap-10 p-5 shadow-2xl">
      
      <div className='flex gap-3'>
        <TextField id="outlined-basic" label="Vendor Name" variant="outlined" name="vendorName" value={vendorValues?.vendorName} onChange={(e) => handleOnChange(e,'vendorName')}/>
        <TextField id="outlined-basic" label="Vendor Entity" variant="outlined" name="vendorEntity" value={vendorValues?.entity} onChange={(e)=>handleOnChange(e,'entity')}/>
        <TextField id="outlined-basic" label="Vendor Payment Term" variant="outlined" name="vendorPayTerm" value={vendorValues?.vendorPayterm} onChange={(e) => handleOnChange(e,'vendorPayterm')}/>
      </div>
      <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded-2xl shadow-2xl mb-11"
            onClick={onClose}
        >
            Close
       </button>
       <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-2xl shadow-2xl mb-11"
            onClick={saveVendor}
        >
            Save
       </button>
       { isNotifyPopUp && (
          <InvalidCreds type={'Alert'} desc={'Vendor Data has been Updayed Succesfully'} onClose={handleClosing}/>
          )
       }
    </div>
    </>
  )
}

export default VendorEditScreen;
