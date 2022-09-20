import React from "react";

const Display = (props:{value:string}) => {
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Display;
