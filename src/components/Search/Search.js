import React from 'react';
import { Link } from 'react-router-dom';
import { BOX, Inner, IntroTitle, Input } from './SearchStyle';
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
        return <Link  key={i} to={`/detail/${item.id}`}>{item.title}</Link>
      })}
      </Inner>
    </BOX>
  );
}