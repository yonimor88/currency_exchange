import React from "react";
import { Link } from "react-router-dom";

function Update() {
  return (
    <div className="Update">
      Type : <input></input>
      <br />
      New Value : <input></input>
      <br />
      <button> Update</button>
      <Link to="/">
        <button className="back_btn">Back</button>
      </Link>
    </div>
  );
}

export default Update;
