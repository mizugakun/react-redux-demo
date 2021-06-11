# React Redux Setup

## steps:

- `npx create-react-app <application name>`: create a React app
- move to the app root directory
- `npm install redux react-redux`: install react-redux
- Create a `components` folder in `./src`
- Create a `CakeContainer.js` file in `./src/components/`

```javascript
import React from "react";

function CakeContainer() {
  return (
    <div>
      <h2>Number of cakes</h2>
      <button>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
```

- Copy following content and replace everything in `App.js`:

```javascript
import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <div className="App">
      <CakeContainer />
    </div>
  );
}

export default App;
```

- `npm start`: run the applicaiton
