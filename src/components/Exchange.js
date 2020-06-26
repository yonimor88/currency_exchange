import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function Exchange() {
    const [currency, setCurrency]= useState([{type:'dollar', value:4},{type:'euro', value:3},{type:'shekel', value:1}])
    const [firstSelect, setFirstSelect]=useState('')
    const [secondSelect, setSecondSelect]=useState('')
    const [result, setResult]=useState(0)
    const [input, setInput]= useState(null)

  const firstRoomType = (e)=>{
    setFirstSelect(e.target.value);
  }

  const secondRoomType = (e)=>{
    setSecondSelect(e.target.value)}

  
  const start = () =>{
    
  }

    return (
    <div className="Exchange">
      From: <select
        name="type"
        id="type"
        onChange={firstRoomType}>
        <option hidden disabled selected value>Type{" "}</option>
        {
        currency.map(item =><option value={item.type} key={item.type}>{item.type}</option>)
        }
      </select>
      <input placeholder="Enter Amount" onChange={(e)=>setInput(e.target.value)}></input>
      <br />
      To :<select
        name="type"
        id="type"
        onChange={secondRoomType}>
        <option hidden disabled selected value>Type{" "}</option>
        {
        currency.map(item =><option value={item.type} key={item.type}>{item.type}</option>)
        }
      </select>
      <br />
      <button style={{backgroundColor:'lightgray', alignSelf:'right'}} onClick={start}>Start</button>
      <br />
      <Link to="/Update">
        <button className="update_btn" >Update</button>
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
