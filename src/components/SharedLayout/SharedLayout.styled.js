import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  
  margin: 0 auto;
  //padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index:5;
  background-color: black;
  padding: 15px 15px;
  align-items: baseline;
  justify-content: space-between;
  //gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled(NavLink)`
  font-weight: 700;
  font-size:30px;
  text-decoration: none;
  color: white;
  
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #9966CC;
  }
`;