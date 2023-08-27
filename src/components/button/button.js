import React from "react";
import "./button.css";

const Button = ({children, ...props}) => (
    <div {...props} className="buttonContainer">
        {children}
    </div>
);

export default Button;
