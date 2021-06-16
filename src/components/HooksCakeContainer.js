import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux";

function HooksCakeContainer() {
  const NumOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {NumOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
