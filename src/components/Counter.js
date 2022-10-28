import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; //made by the react-redux team
// import { INCREMENT } from "../store";
import { counterActions } from "../store/counter";
// note how we refactored our code

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); //will be executed for us by react-redux
  const show = useSelector((state) => state.counter.showCounter); // note why these values changed when adding multiple reducers
  //must use the above in order to get access to state slices
  //can use multiple times
  const dispatch = useDispatch(); // can now dispatch actions against redux store
  //retrieve part of state that is needed
  //note how we get back a counter constant above
  //subscription is automatically set-up
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => dispatch(counterActions.increment());
  const decrementHandler = () => dispatch(counterActions.decrement());
  const increaseHandler = () => dispatch(counterActions.increase(5)); // automatically creates action objects
  //note how the amount is the payload -- payload is just extra data (can give whatever name we want)
  //wire above functions to the buttons

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {show && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {/* could implement with useState -- would actually be the proper way of doing this */}
      {/* same with counter -- just doing it to demonstrate Redux */}
    </main>
  );
};

export default Counter;
