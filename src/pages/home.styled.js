import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1280px;
  display: grid;
  max-width: calc(100vw - 48px);
  //grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  list-style: none;
  align-items: center;
  margin: 60px auto;
  padding: 0 15px;
`;

export const Wrapper = styled.div`
  text-decoration: none;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  
// object-fit: cover;
height:500px;
width:100%;
border-radius: 2px;
    
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;
`;

export const Hero = styled.div`
  min-height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

export const HeroContent = styled.div`
  padding: 0 15px;
  margin: 0 auto;
`;
