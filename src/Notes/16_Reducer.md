# Reducer

## Steps

- Create `cakeReducer.js` in `./src/Redux/cakes`
- Reducer is an object receive state and action as parameters and return new state
- general content in a reducer file:
  - import action types from `type.js`
  - define initial state. eg. `const initialState = { numOfCakes: 10 };`
  - define the reducer:
    - the parameters: `state`, `action`
    - use switch case, use `action.type` as argument
    - return all state `...state` and the state you want to cahnge base on the action type
    - don't forget the default: `default: return state`
  - export the reducer: `export default <reducerName>;`

```javascript
import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
```
