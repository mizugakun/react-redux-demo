# useDespatch Hook

- used to dispatch an action with react redux
- it will return a reference for the dispatching function from the Redux Store

# steps

- keep working on `HooksCakeContainer.js`
- import useDispatch
- call `useDispatch()` function and store the variable `dispatch` in the Redux Store

```javascript
import { useDispatch } from "react-redux";

//function HooksCakeContainer() { ...
const dispatch = useDispatch();
//}
```

- add onClick handler:
  _(make sure of that you import the action creator at the top)_

```javascript
<button conClick={() => buyCake()}>Buy Cake</button>
```
