import React from "react";
import { FaArrowsAltH } from "react-icons/fa";

function RetractableSideBar(){
    return(
        <>
        <aside className="border border-green-500 h-full w-12">
            <nav>
                <FaArrowsAltH />
                <ul>
                    <li>
                        <a href="ClaimViewScreen">Claim View</a>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </aside>
        </>
    )
}

export default RetractableSideBar;