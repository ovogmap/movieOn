import styled from "styled-components"

const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
const ContentBox = styled.div`
  width: 1180px;
  // display: flex;
  padding-bottom: 100px;
`;
const Intro = styled.div`
  padding: 0 0 15px;
  border-bottom: 2px solid #e60000;
  margin-bottom: 50px;
`;
const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  row-gap: 40px;
  margin-top : 20px;
`;
const Items = styled.div`
  flex-basis: 24%;
  text-align: center;
  position: relative;
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
  a {
    display: block;
    text-align: meddle;
  }
  h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 22px;
  }
`;
const ItemImg = styled.img`
  border-radius: 10px;
  width:100%;
  height:100%;
  filter: grayscale(80%);
  transition: all .3s;
`; 

export { Inner, ContentBox, Intro, ItemBox, Items, ItemImg }