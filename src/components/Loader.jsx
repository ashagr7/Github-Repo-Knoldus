import React from "react";
import spinner from "../Spinner-1s-200px.gif";

const Loader = (props) => (
  <div className="loader">
    <img src={spinner} alt="Spinner" />
  </div>
);

export default Loader;
