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
import { authService, dbStore } from "../fbase";
import ListMore from "../routes/ListMore";
import Loading from "./Loading/Loading";

export const UserContext = React.createContext();
export const LikesList = React.createContext();

export default function AppRouter() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [nickName,setNickName] = useState(false);
  const [likeList, setLikeList] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) =>  user.updateProfile(args),
        });
        setInit(true);
      }
    });
  }, [nickName]);
  useEffect(() => {
    setIsLoading(true)
    console.log(userObj)
    if(userObj) {
      dbStore.collection("user").doc(`${userObj.uid}`).get()
      .then(result => {
        const data = result.data().likeList
        console.log(data)
        setLikeList(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [userObj])
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return isLoading ? <Loading /> : (
    <Router>
      <>
      <LikesList.Provider value={{likeList, setLikeList, isLike, setIsLike, userObj, isLoading}}>
        <Nav init={init} />
        <Switch>
          <>
            <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route path="/auth">
                <Auth userObj={userObj} setNickName={setNickName} refreshUser={refreshUser} />
              </Route>
              <Route path="/search" component={Search} />
              <Route path="/list" component={List} />
              <UserContext.Provider value={userObj}>
                <Route path="/detail/:id" component={Detail} />
                <Route path="/listmore/:name" component={ListMore} />
                <Route path="/like" component={Like} />
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
        </LikesList.Provider>
      </>
    </Router>
  );
}
