import React from "react";
import "./../css/InvalidCreds.css";

function InvalidCreds({type,desc,onClose}) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3 className="popup-title">{type}</h3>
        <p className="popup-description">{desc}</p>
        <button onClick={handleClosing} className="popup-button">
          Close
        </button>
      </div>
    </div>
  );

   function handleClosing(){
    onClose(false);
  }

}

export default InvalidCreds;
