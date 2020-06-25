import React, { useState } from "react";
import { Link } from "react-router-dom";

function Exchange() {

    const [firstType, setFirstType]= useState([])
    const [secondType, setSecondType]= useState([])

  return (
    <div className="Exchange">
      From: <select
        name="type"
        id="type"
        onChange={(e) => {
          setFirstType(e.target.value);
        }}
      >
        <option hidden disabled selected value>
          Type{" "}
        </option>
        <option value="Dollar">Dollar</option>
        <option value="Euro">Euro</option>
        <option value="Shekel">Shekel</option>
      </select>
      <input placeholder="Enter Amount"></input>
      <br />
      To :<select
        name="type"
        id="type"
        onChange={(e) => {
          setSecondType(e.target.value);
        }}
      >
        <option hidden disabled selected value>
          Type{" "}
        </option>
        <option value="Dollar">Dollar</option>
        <option value="Euro">Euro</option>
        <option value="Shekel">Shekel</option>
      </select>
      <br />
      <button style={{backgroundColor:'lightgray', alignSelf:'right'}}>Start</button>
      <br />
      <Link to="/Update">
        <button className="update_btn">Update</button>
      </Link>
      <a href="https://www.facebook.com" className="facebook_btn">
        <button>Facebook</button>
      </a>
      <button>View your exchange list</button>

    <div className='List'>

    </div>
    </div>
  );
}

export default Exchange;
