import React from "react";
import styled from "styled-components";
import { Ul, Li } from "../style";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  width: 100%;
  border-bottom: 2px solid #e60000;
  display: flex;
  justify-content: center;
  // position: fixed;
  background: #fff;
`;
const Inner = styled.div`
  width: 1180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Nav = ({ init }) => {
  return (
    <Navbar>
      <Inner>
        <div>
          <Link to="/">
            <h1>
              movie<span>on</span>
            </h1>
          </Link>
        </div>
        <nav>
          <Ul>
            <Li>
              <Link to="/search">검색</Link>
            </Li>
            <Li>
              <Link to="/list">영화리스트</Link>
            </Li>
            {init && (
              <Li>
                <Link to="/like">좋아요리스트</Link>
              </Li>
            )}
            <Li>
              {init ? (
                <Link to="/profile">프로필</Link>
              ) : (
                <Link to="/auth">로그인</Link>
              )}
            </Li>
          </Ul>
        </nav>
      </Inner>
    </Navbar>
  );
};

export default Nav;
