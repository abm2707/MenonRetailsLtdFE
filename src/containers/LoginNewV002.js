import React from "react";
import Login from "./Login";

function LoginNew() {
  return (
    <div className="flex border border-red-500 h-screen w-[100%]">
        <div className="h-full w-[60%] bg-neutral-100 p-20" >
            <img 
                src={require('./../Images/loginImg.png')} 
                className="w-full h-full " 
                alt="Login" 
            />
        </div>
        <div className="flex flex-col border-green-300 border  w-[45%]">
            <div className="  flex flex-col justify-center items-center h-[20%]">
                <h4 className="text text-2xl font-serif text-neutral-800"> Menon Retails Ltd.</h4>
                <h1 className="text text-l font-semibold">Inventory Management System</h1>
            </div>
            <div className=" px-10 py-3 h-[79%] overflow-hidden"> 
            <Login />
            </div>
        </div>
    </div>
  );
}

export default LoginNew;
