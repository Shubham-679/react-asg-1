import React, { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  
  return (
    <div className="container m-2">
      <h1 className="m-2">{count}</h1>
      <button onClick={()=> setCount(count + 1)} className="btn btn-primary m-2">
        Click To Increase Count
      </button>
    </div>
  );
};

export default Count;
