import React from 'react';
import { Link } from 'react-router-dom'; 
import { SideBarData } from './SideBarData'; 

function Sidebar() {
  return (
    <div className="Sidebar">
    <div className='Menu-Header'> Menu
      <ul className="SideBarList">
        {SideBarData.map((val, key) => (
          <li key={key} className="SideBarItems">
            <Link to={val.link} className="icon-title">
              <div className="Sidebar-icon">{val.icon}</div>
              <div className="Sidebar-title">{val.Title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
