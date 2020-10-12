import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Search from "../routes/Search";
import List from "../routes/List";
import Like from "../routes/Like";
import Profile from "../routes/Profile";
import Detail from "../routes/Detail";
import Nav from "./Nav/Nav"
import { authService } from "../fbase";
import ListMore from "../routes/ListMore";

export const UserContext = React.createContext();

export default function AppRouter() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [nickName,setNickName] = useState("");
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: nickName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        setInit(true);
      }
    });
  }, [nickName]);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  console.log(userObj)
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
                <Auth userObj={userObj} setNickName={setNickName} refreshUser={refreshUser} />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/list" component={List} />
              <UserContext.Provider value={userObj}>
                <Route path="/detail/:id" component={Detail} />
                <Route path="/listmore/:name" component={ListMore} />
                <Route path="/like">
                  <Like />
                </Route>
              </UserContext.Provider>
              <Route path="/profile">
                {userObj && (
                  <Profile
                    setInit={setInit}
                    userObj={userObj}
                    refreshUser={refreshUser}
                  />
                )}
              </Route>
            </>
        </Switch>
      </>
    </Router>
  );
}
