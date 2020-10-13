import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const BOX = styled.div`
    padding-top : 50px;
    display: flex;
    justify-content: center;
`;
const Inner = styled.div`
  width: 1180px;
  a {
    padding: 0 20px;
    display : block;
    margin-top: 20px;
  }
  span {
    margin-left: 40px;
    font-size: 16px;
  }
`;
const IntroTitle = styled.div`
  padding: 50px 0 15px;
  border-bottom: 2px solid #e60000;
  margin-bottom: 30px;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #eee;
  padding: 0 20px;
  font-weight: 700;
  border: none;
  transition : all .8s;
 &:focus {
   border-radius: 50px;
   background: #fcfcfc;
 }
`;
export default({onSearch, serachRun, setOnSearch, getQuery, setGetQuery}) => {
  const onChange = (e) => {
    const { value } = e.target;
    setOnSearch(value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    serachRun()
  }
  
  return (
    <BOX>
      <Inner>
        <IntroTitle>
          <h2>검색</h2>
        </IntroTitle>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="검색할 영화제목을 입력후 엔터를 눌러주세요." onChange={onChange} value={onSearch}/>
      </form>
      {getQuery && getQuery.map((item, i)=>{
        return (
          <Link  key={i} to={`/detail/${item.id}`}>
            <p>{item.title}</p>
          </Link>
        )
      })}
      </Inner>
    </BOX>
  );
}