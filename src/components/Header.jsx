import React from "react";
import { useState } from "react";
import styled from "styled-components";
import BalconyIcon from "@mui/icons-material/Balcony";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <Container>
      <Left>
        <Logo></Logo>
      </Left>
      <Middle>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </Middle>
      <Right>
        <a href="#">case studies</a>
        <NavBtn
          onClick={() => {
            setNavOpen(false);
          }}></NavBtn>
      </Right>
      <MenuNavWrapper>
        <MenuNav toggle={navOpen}>
          <CloseBtn
            onClick={() => {
              setNavOpen(true);
            }}></CloseBtn>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </MenuNav>
      </MenuNavWrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  z-index: 10;
`;
const Left = styled.div`
  margin-left: 20px;
`;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
    margin: 0 10px;
    a {
      text-decoration: none;
      color: white;
      font-size: 15px;
      text-transform: uppercase;
      transition: all 300ms ease-in;
      :hover {
        color: #00ffbb;
        border-bottom: 1px solid #00ffbb;
      }
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;
const Right = styled.div`
  margin-right: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    font-size: 15px;
    text-transform: uppercase;
    background-color: #00ffbb;
    padding: 15px 25px;
    border-radius: 43px;
    transition: 300ms ease-in;
    animation: beat 1s ease-in 0s infinite alternate;
    :hover {
      background-color: #00ffbbaa;
    }
  }
`;
const NavBtn = styled(MenuIcon)`
  display: none !important;
  @media (max-width: 750px) {
    display: block !important;
  }
`;
const MenuNavWrapper = styled.div`
  position: absolute;
`;
const MenuNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #212121;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: 300ms ease-in;
  transform: ${(props) =>
    props.toggle ? "translateX(100%)" : "translateX(0)"};
  li {
    list-style: none;
    margin: 0 10px;
    a {
      text-decoration: none;
      color: white;
      font-size: 15px;
      text-transform: uppercase;
      transition: all 300ms ease-in;
      :hover {
        color: #00ffbb;
        border-bottom: 1px solid #00ffbb;
      }
    }
  }
`;
const CloseBtn = styled(CloseIcon)`
  position: absolute;
  z-index: 5;
  top: 20px;
  right: 30px;
`;
const Logo = styled(BalconyIcon)`
  font-size: 3rem;
`;
