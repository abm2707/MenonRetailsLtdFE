import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = ({ jwtToken }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoleAndMenu = async () => {
      try {
        setLoading(true);
        
        const jwtToken = localStorage.getItem('jwtToken');

        if(!jwtToken){
          alert("Session Expired. Please sign in again !!!")
          return;
        }
        console.log("Jwt Token:" ,jwtToken);

        const roleResponse = await axios.get("http://localhost:8085/user/roleByUser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        
        const userRole = roleResponse.data;
        console.log("Role Respo:", roleResponse);
        console.log("User role:", userRole);

        console.log('JWT token inside:', jwtToken);

        const menuResponse = await axios.get(`http://localhost:8085/screenAccess/screens/${userRole}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        console.log(menuResponse.data[0]);
        const menuData = await menuResponse.data[0];
        setMenuItems(menuData);
        console.log("Menu Items", menuItems);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoleAndMenu();
  }, [jwtToken]);

  if (loading) {
    return <div className="sidebar">Loading menu...</div>;
  }

  if (error) {
    return <div className="sidebar">Error: {error}</div>;
  }

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;