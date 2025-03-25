import React from "react";
import "../CSS/Button.css";

function Button({text, isClickButton, operateClick }) { 
  return (
    <button
      className={ isClickButton ? "click-button" : "reset-button" }
      onClick={operateClick}>
      {text}
    </button>
    );
  
}

export default Button;