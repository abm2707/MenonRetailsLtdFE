import { Button } from "@react-login-page/page1";
import React from "react";

function SignUp(){
    return(
    <div className="flex">
        <div className="h-screen w-[60%] border border-neutral-500 bg-slate-100 rounded-lg p-10">
        <img src={require('./../Images/v2-register-light.png')} 
            className="w-full h-full" 
            alt="Login" />
        </div>
        <div className="w-[35%]">
            <div className="py-11 px-5 h-[25%]">
                <h4 className="font-serif text-2xl font-medium m-3">
                    Menon Retails Ltd. - Control Portal
                </h4>
                <h3 className="font-serif text-l  text-neutral-500 m-3">
                    Make Accounts Payable easy and fun !!
                </h3>
            </div>
            <div className="p-4 ml-10 border border-neutral-900 w-f rounded-xl mr-10 h-[70%] shadow-2xl bg-slate-50">
                <div>
                    <label className="p-5 font-serif">Email</label>
                    <input className="m-3 p-2 border border-black rounded-lg w-[85%]" id="email" type="text" placeholder="Email" />
                </div>
                <div>
                    <label className="p-5 font-serif">Password</label>
                    <input className="m-3 p-2 border border-black rounded-lg w-[85%]" id="password" type="password" placeholder="Password" />
                </div>
                <div>
                    <label className="p-5 font-serif">Confirm Password</label>
                    <input className="m-3 p-2 border border-black rounded-lg  w-[85%]" id="confirm-password" type="password" placeholder="Confirm Password" />
                </div> 
                <div>
                <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
                    <div className="flex items-center">
                        &#8203;
                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
                    </div>
                    <div>
                        <strong className="text-black"> I agree to Privacy Policy & terms</strong>
                    </div>
                </label>
                <a className="ml-5 mt-3 inline-block rounded-lg border border-purple-700 bg-purple-700 px-2 py-2 w-[75%] text-sm text-center font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
  Sign Up
</a>
<h3 className="font-mono">Already have an acccount ? <a href="/">Login Here</a></h3>
                </div> 
            </div>
        </div>
    </div>
    )
}

export default SignUp;