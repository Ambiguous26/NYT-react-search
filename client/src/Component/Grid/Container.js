import React from "react";
/** Create the mainPage Container */
export const Container = ({fluid, children}) =>
    <div className={`container${fluid ? "-fluid": ""}`}>
        {children}
    </div>