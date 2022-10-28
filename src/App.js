import React from "react";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}
// also added state here -- not actually added auth functionality in this project
// have a brand new state to manage now -- authentication state
// login state -- is application-wide state (matters to many components in app)
export default App;
