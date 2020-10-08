import React, { useState, useEffect } from "react";
import { authService, firebaseInstance } from "../fbase";
import { useHistory } from "react-router-dom";

function Auth({ userObj, refreshUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setErroe] = useState(null);
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="이메일을 입력해 주세요."
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "회원가입 하기" : "로그인"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "로그인" : "회원가입 하기"}
      </span>
      <button onClick={onGoogleLogIn}>Google 이메일로 로그인하기</button>
    </div>
  );
}

export default Auth;
