import { Button } from "@mui/material";
import React from "react";
import { ButtonCode } from './calculate';
import "./App.css"

const ButtonPanel = (props:{buttonHandler:(code:ButtonCode)=>void}) => {
  return (
    <>
      <div>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("7")}>7</Button>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("8")}>8</Button>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("9")}>9</Button>
        <Button className="cal" variant="contained" onClick={()=>props.buttonHandler("AC")}>AC</Button>
      </div>
      <div>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("4")}>4</Button>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("5")}>5</Button>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("6")}>6</Button>
        <Button className="cal" variant="contained" onClick={()=>props.buttonHandler("+")}>+</Button>
      </div>
      <div>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("1")}>1</Button>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("2")}>2</Button>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("3")}>3</Button>
        <Button className="cal" variant="contained" onClick={()=>props.buttonHandler("-")}>-</Button>
      </div>
      <div>
        <Button className="num" variant="contained" onClick={()=>props.buttonHandler("0")}>0</Button>
        <Button className="cal" variant="contained" onClick={()=>props.buttonHandler(".")}>.</Button>
        <Button className="cal" variant="contained" onClick={()=>props.buttonHandler("D")}>Del</Button>
        <Button className="cal" variant="contained" onClick={()=>props.buttonHandler("=")}>=</Button>
      </div>
      <div>
      <Button variant="outlined">:)</Button>
      <Button variant="outlined">ッ</Button>
      <Button variant="contained" onClick={()=>props.buttonHandler("*")}>×</Button>
      <Button variant="contained" onClick={()=>props.buttonHandler("/")}>÷</Button>
      </div>
    </>
  );
};

export default ButtonPanel;
