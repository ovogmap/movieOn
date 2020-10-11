import React, { useState } from "react";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Inner = styled.div`
  width: 1180px;
  margin: 0 auto;
  .textbox {
    padding: 150px 0 15px;
    border-bottom: 2px solid #e60000;
  }
  .formbox {
    width: 430px;
    margin: 100px auto;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .formitem {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      outline: none;
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
    }
  }
`;
export default({ userObj, setInit, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState("");
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
    setInit(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  const onChange = (e) => {
    const { value } = e.target;
    setNewDisplayName(value);
  };
  return (
    <div>
      <Inner>
        <div className="textbox">
          <h2>{userObj.displayName}님의 프로필</h2>
        </div>
        <div className="formbox">
          <form onSubmit={onSubmit}>
            <input
              className="formitem changebox"
              type="text"
              placeholder="변경할 닉네임을 작성해 주세요."
              value={newDisplayName}
              onChange={onChange}
            />
            <input className="formitem change" type="submit" value="변경하기" />
          </form>
          <button className="formitem logout" onClick={onLogOutClick}>
            로그아웃
          </button>
        </div>
      </Inner>
    </div>
  );
}