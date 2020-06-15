import React from "react";
import spinner from "../Spinner-1s-200px.gif";

const Loader = (props) => (
  <div className="loader">
    <img src={spinner} />
  </div>
);

export default Loader;
