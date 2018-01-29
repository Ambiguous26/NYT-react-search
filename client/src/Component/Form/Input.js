import React from "react";
/** Export the Input to take in the user's input */
export const Input = props => 
    <div className="form-group text-center">
        <label>{props.heading}</label>
        <input className="form-control" {...props}/>
    </div>