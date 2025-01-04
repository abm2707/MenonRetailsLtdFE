import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from 'axios';
import VendorEditScreen from "./VendorEditScreen";

const VendorSearchScreen = ({ onClose }) => {
    const [formData, setFormData] = useState([]);
    const[vendorIdData, setVendorIDData] = useState("");
    const[editVendorScreen, setEditVendorScreen] = useState("");
    //const[isChecked, setChecked] = useState("");
    const[isEdit, setEdit] = useState(false);
    const [count, setCount] = useState(0);
    const[itemVal, setItemVal] = useState();

function searchVendor(){
        if(vendorIdData){
            let data = [];
            data = formData.filter((ele) => {
                return ele.vendorCode == vendorIdData;
        })
            setFormData(data);
        }else{
            getAllVendors();
        }
        }

        function getAllVendors(){
            fetch ("http://localhost:8085/vendor/getAllVendors")
            .then((response) => response.json())
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => console.error("Error fetching data:", error))
        }

        function resetSearch(){
            setVendorIDData("");
            getAllVendors();
        }

        function openEditScreen(){
            setEditVendorScreen(true);
        }

        function closeEditScreen(){
            setEditVendorScreen(false);
        }

        useEffect(() => {
            getAllVendors();
        }, []);

        function handleCheckboxClick(e,item){
            //console.log('Initial value of count is :', count);
            if(e.target.checked){
                //console.log(item)
                setItemVal(item);
                console.log(itemVal);
                setCount(count+1);
                //console.log('Count value is +', count);
            }else{
                //console.log('Count value is - ', count);
                setCount(count-1);
            }
        }

        useEffect(() => {
            if(count == 1){
                setEdit(true);
            }else{
                setEdit(false);
            }
        },[count]);

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] h-[90%]">
                <h2 className="text-xl font-bold">Vendor Master</h2>
                <p className="mt-4">You may veiw and make changes to your vendors as required</p>
                <div className="flex">
                    <div className="flex mt-5">
                        <p> Search Vendor   :</p>
                        <TextField id="outlined-basic" label="Search Vendor" variant="outlined" value={vendorIdData} onChange={(e) => setVendorIDData(e.target.value)}/>
                    </div>
                <button
                    className="mt-6 px-4 py-2 bg-green-500 text-white  rounded-2xl shadow-2xl ml-4"
                    onClick={searchVendor}
                >
                    Search
                </button>
                <button
                    className="mt-6 px-4 py-2 bg-green-500 text-white  rounded-2xl shadow-2xl ml-4"
                    onClick={resetSearch}
                >
                    Reset
                </button>

                {isEdit && (
                <button
                    className="mt-6 px-4 py-2 bg-green-500 text-white  rounded-2xl shadow-2xl ml-4" onClick={openEditScreen}
                >
                    Edit
                </button>
                )}
                
                </div>
                {/* Table */}
                <TableContainer component={Paper} className="mt-4" style={{ maxHeight: "45vh", overflowY: "auto" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell></TableCell>
                                <TableCell>Vendor ID</TableCell>
                                <TableCell>Vendor Name</TableCell>
                                <TableCell>Vendor Entity</TableCell>
                                <TableCell>Payterm</TableCell>
                                <TableCell>Modified date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formData.length > 0 ? (
                                formData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{<input type="checkbox" onChange={(e)=> handleCheckboxClick(e,item)} />}</TableCell>
                                        <TableCell>{item.vendorCode}</TableCell>
                                        <TableCell>{item.vendorName}</TableCell>
                                        <TableCell>{item.entity}</TableCell>
                                        <TableCell>{item.vendorPayterm}</TableCell>
                                        <TableCell>{item.modifiedDate}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3}>No data available</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <button
                    className="mt-6 px-4 py-2 bg-red-500 text-white rounded-2xl shadow-2xl ml-4 mb-11"
                    onClick={onClose}
                >
                    Close
                </button>
                
            </div>
        </div>
        <div className="border-black shadow-2xl rounded-2xl">
            {editVendorScreen && (
                <VendorEditScreen onClose={closeEditScreen} vendorData={itemVal}/>
            )}
        </div>

        </>
    );
};

export default VendorSearchScreen;