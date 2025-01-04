import React from "react";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useEffect } from "react";

const NotificationsPopup = ({ onClose }) => {

    const [formData, setFormData] = useState({
        emailId: '',
        mobileNumber: '',
    });

    const payload = {
        "id": 1
    }

    useEffect(() => {
        fetch('http://localhost:8085/get/email', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(payload)
        })
            .then((response) => response.json())
            .then((data) => {
                setFormData({
                    emailId: data.config_value,
                    mobileNumber: data.config_value2
                })
                console.log("Email Id", data.emailId);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[70%] h-[80%]">
                <h2 className="text-xl font-bold">Email Notifications</h2>
                <p className="mt-4">You may review the settings and change as required.</p>
                <div className="flex mt-5">
                    <p> Email Id used for Notifications: </p>
                    <div className="flex ml-6">
                        <TextField id="outlined-basic" label="Notifications Email" variant="outlined" value={formData.emailId}/>
                    </div>
                </div>
                <div className="flex mt-5">
                    <p> Phone Number used for Notifications: </p>
                    <TextField id="outlined-basic" label="Notifications Email" variant="outlined" value={formData.mobileNumber} />
                </div>
                <button
                    className="mt-6 px-4 py-2 bg-red-500 text-white rounded-2xl shadow-2xl ml-4"
                    onClick={onClose}
                >
                    Close
                </button>
                <button
                    className="mt-6 px-4 py-2 bg-green-500 text-white  rounded-2xl shadow-2xl ml-4"
                    onClick={onClose}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotificationsPopup;
