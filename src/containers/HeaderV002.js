import React from "react";
import { Button } from "@headlessui/react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHelpSquareRounded } from "react-icons/tb";
import TextField from '@mui/material/TextField';
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function HeaderV002() {
  const nav = useNavigate();
    return (
      <>
        <div className="flex w-[98%] mt-4 shadow-slate-50">
            <div className="border border-black p-1 flex h-14 rounded-lg w-[75%] ml-9 shadow-xl bg-green-600">
              <div className="font-serif mt-2 ml-3 mr-4 text-white">
              MENON RETAILS LTD.
              </div> 
              <div className="h-7 w-1 bg-black mr-4 mt-2"></div>
              
            <button className="w-32 h-10  shadow-2xl rounded-full gap-16 mr-6 font-serif text-white">
                    Dashboard
            </button>
            
            <input className="pl-9 border border-black p-3 rounded-2xl ml-40" type="text" placeholder="Search Me"></input>
            
            </div>
            <div className="border border-black p-1 flex h-14 rounded-lg w-[20%] ml-20 bg-green-600">
            
                <button className="ml-auto w-32 h-10 bg-[blue-200] shadow-2xl rounded-full gap-16 mr-6 font-serif text-white">
                    Profile
                </button>
                
                <IoSettingsOutline className="text-3xl mt-1 mr-4"/>
                <TbHelpSquareRounded className="text-4xl mt-0 mr-2"/>
                <IoIosLogOut className="text-4xl mt-0 mr-2" onClick={handleLogout}/>
            </div>
        </div>
      </>
    );

    async function handleLogout(){
      nav('/')
    }

  }

export default HeaderV002;