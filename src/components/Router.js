import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Search from "../routes/Search";
import List from "../routes/List";
import Like from "../routes/Like";
import Profile from "../routes/Profile";
import Nav from "./Nav";
import { authService } from "../fbase";
export default function AppRouter() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  console.log(userObj);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        setInit(true);
      }
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <Router>
      <>
        <Nav init={init} />
        <Switch>
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route path="/auth">
              <Auth userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/profile">
              <Profile
                setInit={setInit}
                userObj={userObj}
                refreshUser={refreshUser}
              />
            </Route>
            <Route path="/like">
              <Like />
            </Route>
          </>
        </Switch>
      </>
    </Router>
  );
}
