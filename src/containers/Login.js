import React, { useState } from "react";
import axios from "axios";
import InvalidCreds from "../popUpScreens/InvalidCredsScreen";
import { useNavigate } from "react-router-dom";

function Login({setIsLoggedIn, setLoginPayload}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(false);  
  const [loading, setLoading] = useState(false);
  const [otpEnteredVal, setOtpVal] = useState(""); 
  const [generatedOtp, setGenVal] = useState("");
  const [jwtToken, setJwtToken] = useState(""); 
 const [setPopUp, showPopUp] = useState(false);

 const nav = useNavigate();

  function validateForm() {
    if (!otp) {
      return email.length > 0 && password.length > 0;
    }
    return otpEnteredVal.length > 0;  // For OTP input
  }

  // Handle login or OTP request
  function handleLogin(e) {
    e.preventDefault();

    if (!otp) {
      // Login request (before OTP)
      const loginPayload = {
        emailId: email,
        password: password,
      };

      setLoading(true);

      axios
        .post("http://127.0.0.1:8085/auth/login", loginPayload)
        .then((response) => {
          setLoading(false);
          setOtp(true);  
          setGenVal(response.data); 
          console.log("Generated OTP:", generatedOtp);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          showPopUp(true);
        });
    } else {
      // OTP submission logic (after OTP)
      const otpPayload = {
        enteredOtp: otpEnteredVal,
        generatedOtp: generatedOtp,
        accessId: email,
      };

      setLoading(true);
      console.log(otpPayload);

      axios
        .post("http://127.0.0.1:8085/auth/login/authLogin", otpPayload)
        .then((response) => {
          console.log("JWT Token:", response.data);

          const token = response.data.replace("JWT Token: ", "").trim(); 
          setJwtToken(token);  
          localStorage.setItem("jwtToken",token)
          // setIsLoggedIn(true)
          nav("/Home")
          setLoginPayload(otpPayload);
        })
        .catch((error) => {
          console.error("Authentication failed:", error);
        })
        .finally(() => {
          setLoading(false); 
        });
    }
  }

  const containerStyle = {
    width: "500px",
    height: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "95%",
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    opacity: validateForm() ? 1 : 0.5,
  };

  return (
    <div className="ml-70 border rounded border-purple-500 w-full">
      <form className=" rounded-lg p-9">
        {/* Email */}
        <div>
          <label style={labelStyle} htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
             style={inputStyle}
            autoFocus
          />
        </div>

        {/* Password */}
        <div>
          <label style={labelStyle} htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        {loading && <div>Loading...</div>}

        {/* OTP Field */}
        {otp && (
          <div>
            <label style={labelStyle} htmlFor="otp">OTP</label>
            <input
              id="otp"
              type="number"
              value={otpEnteredVal}
              onChange={(e) => setOtpVal(e.target.value)}
              style={inputStyle}
            />
          </div>
        )}

        <button className = "bg-gradient-to-b from-purple-800 to-purple-600 p-2 rounded-lg text-white px-7" onClick={handleLogin} type="submit" disabled={!validateForm()}>
          {otp ? "Login" : "Request For OTP"}
        </button>
        <h3 className="font-serif">New to our platform ? <a href="/signUp">Sign Up Here</a></h3>
      </form>

      {setPopUp && <InvalidCreds type="Error" desc="Invalid Creds Entered" onClose={showPopUp}/>}

    </div>
  );
}

export default Login;
