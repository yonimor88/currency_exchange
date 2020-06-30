import React, { useState } from "react";
import { Link } from "react-router-dom";

function Exchange() {
    const [currency, setCurrency]= useState([{type:'dollar', value:4},{type:'euro', value:3},{type:'shekel', value:1}])
    const [firstSelect, setFirstSelect]=useState(0)
    const [secondSelect, setSecondSelect]=useState(0)
    const [input, setInput]= useState(null)
    const [list, setList] = useState([{firstCurrency:'', secondCurrency:''}])
    const [show, setShow] = useState(false)
 

  const start = () =>{
    const newList=list.push([{firstCurrency:firstSelect, secondCurrency:secondSelect}])
        setList(...list,[newList]);

  }

  const exchange = ()=>{
    setShow(!show)
  }

 const remove=()=> {
   
    const newList = list.filter((element, index) => (index))
    setList([newList],...list);
}
  const showList = () =>{
    if (show === false){
      return (
        <div></div>
      )
    }
    else { 
      return(
        <div className='List'>
          {
        list.map((item, index) =>
          <div className='inList' >
           #{index+1}
           <br/>
           from {item.type} to {item.type}
           <br/>
            {input} = {input*firstSelect/secondSelect}
            <button onClick={remove}>X</button>
          </div>)
      }
        </div>
      )}
  }
 

    return (
    <div className="Exchange">
      From: <select
        name="type"
        id="type"
        onChange={e=>{setFirstSelect(e.target.value)}}>
        <option hidden disabled selected value>Type{" "}</option>
        {
        currency.map((item, index) =><option value={item.value} key={item.type}>{item.type}</option>)
        }
      </select>
      <input required type="number" placeholder="Enter Amount" onChange={e=> {setInput(e.target.value)}}></input>
      <br />
      To :<select
        name="type"
        id="type"
        onChange={e=>{setSecondSelect(e.target.value)}}>
        <option hidden disabled selected value>Type{" "}</option>
        {
        currency.map(item =><option value={item.value} key={item.type} name={item.type}>{item.type}</option>)
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
      <button onClick={exchange}>View your exchange list</button>

    {showList()}
    </div>
  );
}

export default Exchange;
