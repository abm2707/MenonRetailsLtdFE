import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SideBar({userRole}){
    const [screens,setScreens] = useState([]);

    const screenPathMap = {
        Dashboard: "/dashboard",
        Profile: "/profile",
        Settings: "/settings",
        Orders: "/orders",
      };

    useEffect(() => {
        if (userRole) {
          fetchScreensByRole(userRole);
        }
      }, [userRole]); 
      
    async function fetchScreensByRole(role) {
        try {
            const token = localStorage.getItem("jwtToken"); 
            if (!token) {
              alert("Please log in to proceed.");
              return;
            }

            const response = await axios.get(
                `http://127.0.0.1:8085/screenAccess/screens/${role}`, 
                {
                  headers: {
                    Authorization: `Bearer ${token}`, 
                  },
                }
              );

              setScreens(response.data);
    }catch(error){
        alert("Failed to fetch screens. Please try again.");
    }
}

return (
    <div className="SideBar">
      <div className="MenuTab">MENU</div>
      <ul className="sideBarlist">
        {screens.map((screenName, index) => {
          const path = screenPathMap[screenName]; 
          if (!path) {
            console.warn(`No path defined for screen: ${screenName}`);
            return null;
          }

          return (
            <li key={index} className="SideBarItems">
              <Link to={path} className="icon-title">
                <div className="Sidebar-title">{screenName}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export default SideBar;