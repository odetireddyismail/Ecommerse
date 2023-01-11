import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="./images/Ismail.png"
          alt="Loading the image"
          className="logo"
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
padding: 0 2.8rem;
position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 10rem;
  justify-content: space-between;
  align-items: center;
 
  background-color:#f6f8fa;
  .logo {
    height: 5rem;
  }

  
`;
export default Header;
