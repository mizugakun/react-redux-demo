import React from "react";
import { useSelector } from "react-redux";

function HooksCakeContainer() {
  const NumOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h2>Num of cakes - {NumOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
