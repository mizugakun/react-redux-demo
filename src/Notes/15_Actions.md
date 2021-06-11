# Actions

## Folder Structure

- There is no a particular "right" structure for react-redux (making it simple is the best)
- Create `Redux` folder in `./src`
- Create `cakes` folder in `./src/Redux` (name the folder based on the feature)

## Action Creator and Action Type

- We usually define the action as constant string. To do so, we define it in `cakeTypes.js`
- Create `cakeTypes.js` in `./src/Redux/cakes`

```javascript
export const BUY_CAKE = "BUY_CAKE";
```

- we only need one action creator which is generate one acftion: `BUY_CAKE`
- Create `cakeAction.js` file in `./src/Redux/cakes`

```javascript
import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
```
