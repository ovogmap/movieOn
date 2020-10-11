import styled from "styled-components"
const Inner = styled.div`
 padding-top: 100px;
 width: 1180px;
 margin: 0 auto;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
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
const ItemIntro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
export { Inner, ItemBox, Items, ItemImg, ItemIntro }