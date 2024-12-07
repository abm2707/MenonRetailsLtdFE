import './../css/Header.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

function Header({isLoggedIn})
{
    return (
        <header className="bg-slate-200">
        {/*<div className="header-title">Inventory Management System - Menon Retails Ltd</div>*/}
            <div className="header-icons">
                <button className="icon-button" title="Profile">
                    Dashboard
                </button>
                <button className="icon-button" title="Profile">
                    <i className="fas fa-user"></i>
                </button>
                <button className="icon-button" title="Settings" onClick={redirectToSettings}>
                    <i className="fas fa-cog"></i>
                </button>
                <button className="icon-button" title="Logout" onClick={initiateLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                </button>
            </div>
        </header>
    );

    async function initiateLogout() {
        localStorage.removeItem("token");
        isLoggedIn(false);
        //navigate("/login");
    }

    async function redirectToSettings() {
        //navigate("/settings");
    }

};

export default Header;
