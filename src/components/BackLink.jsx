import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  

  :hover {
    color: #9966CC;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
