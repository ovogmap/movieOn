import styled from "styled-components";
const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  filter: grayscale(80%);
  .text {
    font-size: 60px;
    font-weight: 300;
    color: #fff;
  }
`;
const NickName = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #fff;
`;
const Title = styled.p`
  font-size: 80px;
  font-weight: 400;
  font-style: italic;
  color: #fff;
  padding: 40px 0 60px;
`;
const More = styled.button`
  width: 280px;
  height: 120px;
  border: 10px solid #fff;
  background: rgb(0, 0, 0, 0.2);
  font-size: 60px;
  font-weight: 400;
  color: #fff;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    background: rgb(0, 0, 0, 0.5);
  }
`;

export { MainBox, NickName, Title, More }