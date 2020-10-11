import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Search from "../routes/Search";
import List from "../routes/List";
import Like from "../routes/Like";
import Profile from "../routes/Profile";
import Detail from "../routes/Detail";
import Nav from "./Nav";
import { authService } from "../fbase";
import ListMore from "../routes/ListMore";
export default function AppRouter() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
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
          {userObj &&
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
              <Route path="/listmore/:name" component={ListMore} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/profile">
                {userObj && (
                  <Profile
                    setInit={setInit}
                    userObj={userObj}
                    refreshUser={refreshUser}
                  />
                )}
              </Route>
              <Route path="/like">
                <Like />
              </Route>
            </>
            } 
          </>
        </Switch>
      </>
    </Router>
  );
}
