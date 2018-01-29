import React from "react";
/** Export a Jumbotron  */
const Jumbotron = ({ children }) =>
  <div style={{ height: 300, clear: 'both' }} className="jumbotron text-center">
    <h1>New York Times Article Scrubber</h1>
    <h3>Search for and annnotate articles of interest!</h3>
  </div>;
export default Jumbotron;