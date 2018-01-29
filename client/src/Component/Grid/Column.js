import React from "react";
/** Export a Column that takes in parameters with size and children */
export const Column = ({size, children}) =>
    <div className = {size.split(" ").map(size => "col-" + size).join(" ")}>
        {children}
    </div>;