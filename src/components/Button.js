import React from "react";

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