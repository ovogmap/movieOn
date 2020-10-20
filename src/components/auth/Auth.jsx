import React from 'react';
import { MainBox, Inner } from './AuthStyle'
export default ({ addUser, error, bg, onSubmit, onChange, newAccount, toggleAccount  }) => {
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
              value={addUser.email}
              onChange={onChange}
            />
            <input
              className="formitem"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              required
              value={addUser.password}
              onChange={onChange}
            />
            {newAccount &&(<input
              className="formitem"
              name="nickName"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              required
              value={addUser.nickName}
              onChange={onChange}
            />)

            }
            <input
              className="change"
              type="submit"
              value={newAccount ? "회원가입 하기" : "로그인"}
            />
            
          </form>
          <p>{error && error}</p>
          <span className="toggle" onClick={toggleAccount}>
            {newAccount ? "로그인" : "회원가입 하기"}
          </span>
        </div>
      </Inner>
    </MainBox>
  )
}