import styled from 'styled-components';
const Inner = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  p {
    color: #fff;
    padding-bottom: 30px;
  }
  .toggle {
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    text-decoration: underline;
  }
  .title {
    font-size: 70px;
    font-weight: 900;
    color: #fff;
    span {
      color: #e60000;
    }
  }
  .innerbox {
    margin-top: 50px;
    width: 500px;
    height: 600px;
    border-radius: 40px;
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
      width: 430px;
      display: flex;
      flex-direction: column;
    }
    .formitem {
      width: 100%;
      height: 40px;
      border-radius: 10px;
      outline: none;
      padding: 0 20px;
      border: none;
      margin-top: 10px;
    }
    .changebox {
      padding-left: 15px;
      border: 2px solid #000;
      font-size: 20px;
    }
    .change {
      border: none;
      background: #e60000;
      font-size: 24px;
      color: #fff;
      height: 50px;
      border-radius: 10px;
      font-weight: bold;
      margin: 20px 0 40px;
      cursor: pointer;
    }
    .logout {
      border: none;
      background: #000;
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      margin: 20px 0 40px;
      cursor: pointer;
      width: 430px;
      cursor: pointer;
      border-radius: 10px;
      outline: none;
      height: 50px;
    }
  }
`;
const MainBox = styled.div`
  width: 100%;
  height: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // color: #fff;
  // flex-direction: column;
`;
export {
  MainBox,
  Inner
}