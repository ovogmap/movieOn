import React, { useState, useEffect } from "react";
import { authService, firebaseInstance } from "../fbase";
import { useHistory } from "react-router-dom";
import api from "../util/Api";
import styled from "styled-components";
const Inner = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .toggle {
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    text-decoration: underline;
  }
  .title {
    font-size: 70px;
    font-weight: 900;
    color: #fff;
    span {
      color: #e60000;
    }
  }
  .innerbox {
    margin-top: 50px;
    width: 500px;
    height: 600px;
    border-radius: 40px;
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
      width: 430px;
      display: flex;
      flex-direction: column;
    }
    .formitem {
      width: 100%;
      height: 40px;
      border-radius: 10px;
      outline: none;
      padding: 0 20px;
      border: none;
      margin-top: 10px;
    }
    .changebox {
      padding-left: 15px;
      border: 2px solid #000;
      font-size: 20px;
    }
    .change {
      border: none;
      background: #e60000;
      font-size: 24px;
      color: #fff;
      height: 50px;
      border-radius: 10px;
      font-weight: bold;
      margin: 20px 0 40px;
      cursor: pointer;
    }
    .logout {
      border: none;
      background: #000;
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      margin: 20px 0 40px;
      cursor: pointer;
      width: 430px;
      cursor: pointer;
      border-radius: 10px;
      outline: none;
      height: 50px;
    }
  }
`;
const MainBox = styled.div`
  width: 100%;
  height: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // color: #fff;
  // flex-direction: column;
`;
function Auth({ userObj, refreshUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  console.log(movie);
  const bg =
    movie &&
    `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}) center / cover no-repeat`;
  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        // console.log(data.user.displayName);
        // data.user.displayName = nickName;
        history.push("/");
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
        console.log(data.user.displayName);
        history.push("/");
      }
    } catch (error) {
      setErroe(error.message);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const toggleAccount = () => {
    setNewAccount(!newAccount);
  };
  const onGoogleLogIn = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
    history.push("/");
  };
  return (
    <MainBox style={{ background: bg }}>
      <Inner>
        <div className="innerbox">
          <h2 className="title">
            movie<span>on</span>
          </h2>
          <form onSubmit={onSubmit}>
            <input
              className="formitem"
              name="email"
              type="text"
              placeholder="이메일을 입력해 주세요."
              required
              value={email}
              onChange={onChange}
            />
            <input
              className="formitem"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              required
              value={password}
              onChange={onChange}
            />
            <input
              className="change"
              type="submit"
              value={newAccount ? "회원가입 하기" : "로그인"}
            />
            {error}
          </form>
          <span className="toggle" onClick={toggleAccount}>
            {newAccount ? "로그인" : "회원가입 하기"}
          </span>
          <button className="logout" onClick={onGoogleLogIn}>
            Google 이메일로 로그인하기
          </button>
        </div>
      </Inner>
    </MainBox>
  );
}

export default Auth;
