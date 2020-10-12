import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  list-style: none;
  margin-left: 45px;
`;
const Navbar = styled.div`
  width: 100%;
  border-bottom: 2px solid #e60000;
  display: flex;
  justify-content: center;
  position: fixed;
  background: #fff;
  z-index: 1;
  span {
    color: #e60000;
  }
`;
const Inner = styled.div`
  width: 1180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .pointbox {
    background: #e60000;
    box-sizing: content-box;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
  }
`;
export { Ul, Li, Navbar, Inner };
