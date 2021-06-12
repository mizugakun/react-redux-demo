# React Store

- create `store.js` file in `./src/Redux`

```javascript
import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;
```

- back to `App.js` and make following changes:

  - import `Provider` from `react-redux`
  - import the `store` you just made
  - encapsulate the content with `Provider` tag, and make `store` as its props

  ```javascript
  // ...
  import store from "./components/Redux/store";
  import { Provider } from "react-redux";

  function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <CakeContainer />
        </div>
      </Provider>
    );
  }

  export default App;
  ```
