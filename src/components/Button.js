import React from "react";

function Button({text, isClickButton }) { 
  return (
    <button
      className={ isClickButton ? "click-button" : "reset-button" }>
      {text}
    </button>
    );
  
}