import React from 'react'
import Checkbox from "@material-ui/core/Checkbox";
import "./Output.css"
import {useDispatch} from "react-redux";
import {setCheck} from "../features/todoSlice";
const Output = ({name,done,id}) => {
  const dispatch=useDispatch();
  const handleCheck=()=>{
      dispatch(setCheck(id));
  }
  return (
    <div className="output">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{'aria-label':'secondary-checkbox '}}
       />
       <p className={done && "output--done"}>{name}</p>
    </div>
  )
}

export default Output
