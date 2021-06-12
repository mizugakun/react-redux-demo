# Connect

- How an application **subscribe** the state in the store?
- How an application **dispatch** an action to the reducer?

## Steps:

1. create `mapStateToProps` method in `./src/components/cakeContainer.js` file

   ```javascript
   const mapStateToProps = state => {
       return {
           numOfCakes = state.numOfCakes
       }
   }
   ```

- **_Selector_** (not in this example)

  - return the information of state from Redux when it's only required.
  - it usually is not simple as `mapStateToProps` methods
  - it usually is matained in large scale project

2. create `mapDispatch` method in `./src/components/cakeContainer.js` file

   - create `index.js` file in `./src/Redux`

   ```javascript
   export { buyCake } from `./cake/cakeActions
   ```

   - import buy cake action creator in `./src/components/cakeContainer.js` file

   ```javascript
   import { buyCake } from `../Redux`
   // function CakeContainer() { ... }
   // const mapStateToProps = state => { ... }
   const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    };
   };
   ```

3. Connect `mapStateToProps` and `mapDispatchToProps` to React component:

   - import `connect` library from `react-redux`
   - use HOC pattern to export cakeContainer

   ```javascript
   import { connect } from "react-redux";

   //...

   export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
   ```

## Connecting Container to the Redux Store

### mapStateToProps method

- **make `CakeContainer` receive new props `numOfCake` from redux store**
- the state from react store is mapped to component's props
- beside the props the container received, it also receieve `numOfCakes` from redux store as props
- let's change the code in `CakeContainer`:

```javascript
function CakeContainer(props) {
  return (
    <div>
      <h2>Nomber of cake - {props.numOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  );
}
```

### mapDispatchToProps method

- **make `CakeContainer` receive new props `buyCake()`**
- the action creator will be mapped to component's props
- this component will also receieve `buyCake()` method as props
- let's change the code in `CakeContainer`:

```javascript
function CakeContainer(props) {
    return (
        <h2>Nomber of cake - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    )
}
```
