# Cake and Ice Cream

## let's create another reducer

- create `iceCream` folder in the `./src/Redux` folder
- create following files in `./src/Redux/iceCream`:
  - `iceCreamActions.js`
  - `iceCreamReducer.js`
  - `iceCreamType.js`
- import the new action creator in `./src/Redux/index`
- use `combineRedicers` methods to combine multiple reducers:

  - create a `rootReducer.js` file in `./src/Redux`

  ```javascript
  import { combineReducers } from "redux";
  import cakeReducer from "./cake/cakeReducer";
  import iceCreamReducer from "./iceCream/iceCreamReducer";

  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  });

  export default rootReducer;
  ```

  - modify the codes in `store.js` file

  ```javascript
  import { createStore } from "redux";
  import rootReducer from "./RootReducer";
  const store = createStore(rootReducer);

  export default store;
  ```

- create `IceCreamContainer.js` file in `./src/components/` folder

```javascript
import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Cream - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
```

- **important**:
  - the state is maintain by separated reducers
  - we need to spacify which reducer we would like to access when we try to use state
  - the keywords are define in the `combineReducers()` method in `RootReducer.js`
  - **CakeContainer**:
  ```javascript
  const mapStateToPorps = (state) => {
    return {
      numOfCake: state.cake.numOfCakes,
    };
  };
  ```
  - **IceCreamContainer**:
  ```javascript
  const mapStateToPorps = (state) => {
    return {
      numOfIceCream: state.iceCream.numOfIceCream,
    };
  };
  ```
  - **HooksCakeContainer**:
  ```javascript
  const NumOfCakes = useSelector((state) => state.cake.numOfCakes);
  ```
