# useSelector Hook

- useSelector is a hook that react-redux library provided which acts equivalent to the **mapStateToProps** method
- to get hook of any state that is maintained in the Redux Store
- recieve **state** as its argument
- return the value in state

## steps

- create `HooksCakeContainer.js` in `./src/components`

```javascript
import React from "react";

function HooksCakeContainer() {
  return (
    <div>
      <h2>Num od cakes - </h2>
      <button>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
```

- add useSelector:

```javascript
import { useSelector } from "react-redux";

// function HooksCakeContainer() {...
const numOfCakes = useSelector((state) => state.numOfCakes);
//...}
```

- include `numOfCakes` varaiable in the JSX
- final codes:

```javascript
import React from "react";
import { useSelector } from "react-redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h2>Num od cakes - {numOfCakes}</h2>
      <button>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
```

- still need a handler for onClick event
