// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";
// configureStore makes merging redurcers easier
// put redux logic inside of here
// note how put "type": "module" inside package.json to get import to work

// dealing with actions in a better way

// export const INCREMENT = "INCREMENT";

// preparing a slice of global state above

// could also do in different files

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: state.counter + 1, showCounter: state.showCounter }; // still need to put in the other property that is not being changed
//     // note -- just add an attribute to the object in order to add more
//     // state values
//     // state.counter++
//     // return state
//     // note why the above would be wrong -- due to actually overwriting state not merging
//     // Redux overwrites state
//     // should never mutate the exisiting state -- should always overwrite it
//   }

//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//     // note the error that would occur if we did not show the counter
//     // leaving off state properties would set that property to undefined essentially
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//     // note how we added this new action type later on
//   }
//   // need to be careful of placement
//   return state;
//   // note -- we are not merging with the existing state
//   // actually overwriting the existing state
// };
// const store = createStore(counterSlice.reducer); // note how the name of the property does not match

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
// always only call configureStore once

// redux wants one main reducer function
// note -- now want to subscribe to the store and dispatch actions from
// specific components

//must remember to subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "OTHER" }); // will just return the current state

export default store;

// need to remember that objects and arrays are reference values
