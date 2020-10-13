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

export { BOX, Inner, IntroTitle, Input }