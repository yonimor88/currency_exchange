import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function Exchange() {
    const [currency, setCurrency]= useState([{type:'dollar', value:4},{type:'euro', value:3},{type:'shekel', value:1}])
    const [firstSelect, setFirstSelect]=useState(0)
    const [secondSelect, setSecondSelect]=useState(0)
    const [result, setResult]=useState(0)
    const [input, setInput]= useState(null)
    const [list, setList] = useState([{firstCurrency:'', secondCurrency:'', amount:''}])
    
  const firstRoomType = (e)=>{
    setFirstSelect({value:e.target.value, type:e.target.type});
  }

  const secondRoomType = (e)=>{
    setSecondSelect(e.target.value)
  }

  const start = () =>{
    setResult(input*firstSelect/secondSelect)
    setList({firstCurrency:firstSelect, secondCurrency:secondSelect, amount:result})
  }

  const validInput = (e) =>{
    setInput(e.target.value)
  }

    return (
    <div className="Exchange">
      From: <select
        name="type"
        id="type"
        onChange={firstRoomType}>
        <option hidden disabled selected value>Type{" "}</option>
        {
        currency.map(item =><option value={item.value} key={item.type}>{item.type}</option>)
        }
      </select>
      <input required type="number" placeholder="Enter Amount" onChange={validInput}></input>
      <br />
      To :<select
        name="type"
        id="type"
        onChange={secondRoomType}>
        <option hidden disabled selected value>Type{" "}</option>
        {
        currency.map(item =><option value={item.value} key={item.type}>{item.type}</option>)
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
