import React, { useState } from "react";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";
function Profile({ userObj, setInit, refreshUser }) {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="변경할 닉네임을 작성해 주세요."
          value={newDisplayName}
          onChange={onChange}
        />
        <input type="submit" value="닉네임 수정" />
      </form>
      <button onClick={onLogOutClick}>로그아웃</button>
    </div>
  );
}

export default Profile;
