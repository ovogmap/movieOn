import React, { useState, useEffect } from "react";
import { authService, dbStore, firebaseInstance } from "../fbase";
import { useHistory } from "react-router-dom";
import Auth from '../components/auth/Auth'
import api from "../store/api/Api";
export default ({setNickName}) => {
  const [addUser, setAddUser] = useState({
    email: "",
    password: "",
    nickName: "",
  })
  const [newAccount, setNewAccount] = useState(false);
  const [error, setErroe] = useState(null);
  const [movie, setMovie] = useState(null);
  const fetchMovie = async () => {
    const newMovie = await api.now_playing();
    const index = Math.floor(Math.random() * newMovie.data.results.length);
    setMovie(newMovie.data.results[index]);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  const bg = `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path}) center / cover no-repeat`;
  const history = useHistory();
  const onCreateNickName = async (user) => {
    await user.user.updateProfile({
      displayName : addUser.nickName,
    })
    createUser(user)
    setNickName(true)
  }
  const createUser = async (user) => {
    const result = await dbStore.collection('user').doc(user.user.uid).set({
      displayName: user.user.displayName,
      id: user.user.uid,
      likeList: []
    })
    console.log(result)
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      const { email, password } = addUser
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        onCreateNickName(data)
        history.push("/");
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
        history.push("/");
      }
    } catch (error) {
      setErroe(error.message);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setAddUser({
      ...addUser,
      [name]: value
    })
  };
  const toggleAccount = () => {
    setNewAccount(!newAccount);
  };
  return <Auth addUser={addUser} bg={bg} error={error} toggleAccount={toggleAccount} onSubmit={onSubmit} onChange={onChange} newAccount={newAccount} />
}