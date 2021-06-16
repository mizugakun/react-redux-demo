import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./Redux/store";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
