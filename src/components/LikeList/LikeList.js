import React, { useContext } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { dbStore } from "../../fbase";
import { LikesList } from "../Router"
const Box = styled.div`
`;
const ItemIntro = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  flex-wrap: wrap;
  .itembox {
    flex-basis: 25%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    margin-top: 50px;
    p {
      margin: 10px 0;
    }
    button {
      background: #e60000;
      border: none;
      padding: 5px 10px;
      color: #fff;
      font-weight: 900;
      font-size: 16px;
      border-radius: 5px;
    }
  }
`;
const Intro = styled.div`
  padding: 0 0 15px;
  border-bottom: 2px solid #e60000;
  margin-bottom: 50px;
`;
const Inner = styled.div`
 padding-top: 100px;
 width: 1180px;
 margin: 0 auto;
`;
export default ({likeList, setLikeList}) => {
  const like = useContext(LikesList)
  const { userObj } = like
  const onRemove = (id) => {
    if(likeList.length !== 0){
      const array = [...likeList]
      const reasult = array.filter(item => {
        return item.id !== id
      })
      dbStore.collection("user").doc(`${userObj.uid}`).update({
        likeList: reasult
      }).then(() => {
        console.log("remove")
      })
      setLikeList(reasult)
    }
  }
  return (
    <Box>
      <Inner>
      <Intro>
        <h2>좋아요 리스트</h2>
      </Intro>
      <ItemIntro>
      {likeList && likeList.map(item => {
        const { id, title, poster_path } = item
        return (
          <div className="itembox" key={id}>
            <Link to={`/detail/${id}`} >
              <img src={`//image.tmdb.org/t/p/original/${poster_path}`} alt="" width="200px" height="300px" />
              <p>{title}</p>
            </Link>
            <button onClick={()=>{onRemove(id)}}>좋아요 취소</button>
          </div>
        ) 
      })
      }
      </ItemIntro>
      </Inner>
    </Box>
  )
}