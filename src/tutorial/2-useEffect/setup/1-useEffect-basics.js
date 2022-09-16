import React,{} from "react";
import { useState } from "react";

const useEffectsBasics = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={()=> setValue(value + 2)}>Add</button>
    </div>
  )
};

export default useEffectsBasics;