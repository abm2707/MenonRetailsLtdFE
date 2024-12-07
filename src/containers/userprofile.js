import React, { useEffect, useState } from "react";
import "./../css/AccountSettings.css"; 
import axios from "axios";

function AccountSettings({userName}) {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function handleUserProfile() {
        const token = localStorage.getItem("jwtToken");
        console.log("Token for service is ", token);
        try {
            const email = userName.accessId; 
            console.log("Username",userName);
            console.log("Request Body",email);
            const response = await axios.post(
                "http://localhost:8085/auth/UserDataByLoggedUser",
                { accessId: email },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
           
            setProfile(response.data[0][0]); 
        } catch (error) {
            console.error("Error occurred while fetching user data:", error);
        }
    }

 

    if (userName) {
        handleUserProfile(); 
    }
}, [userName]);


  const handlePasswordChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleProfileSave = () => {
    alert("Profile saved successfully!");
  };

  const handlePasswordSave = () => {
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    alert("Password changed successfully!");
  };

  const handleDeactivateAccount = async () => {

    const confirmDeactivation = window.confirm(
      "Are you sure you want to deactivate your account? This action cannot be undone."
    );

    if (confirmDeactivation) {
        try{
            const email = userName.accessId; 
            const token = localStorage.getItem("jwtToken");
            console.log("Extracted JWT Token is" , token);
            console.log("Email Id is ",email);
            if(!token){
               alert("Kindly reload and login again. Session Expired !!");
               return;     
            }
            const response = await axios.delete(
                `http://localhost:8085/AccountControl/DeleteAccount/${email}`, 
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
        }catch(error){
            console.log("Error occure while deactivating the account",error)
            alert("Unable to process request at a momoent. Please try again later.");
        }
        alert("Account deactivated.");
      
    }
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>

      <div className="profile-section">
        <h3>Profile Information</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.firstName}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={profile.phoneNumber}
            readOnly
          />
        </div>
        <button className="btn save-btn" onClick={handleProfileSave}>
          Save Profile
        </button>
      </div>

      {/* Password Management */}
      <div className="password-section">
        <h3>Change Password</h3>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={handlePasswordChange(setCurrentPassword)}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={handlePasswordChange(setNewPassword)}
          />
        </div>
        <button className="btn save-btn" onClick={handlePasswordSave}>
          Change Password
        </button>
      </div>

      {/* Deactivate Account */}
      <div className="deactivate-section">
        <h3>Deactivate Account</h3>
        <button className="btn danger-btn" onClick={handleDeactivateAccount}>
          Deactivate Account
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
