import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content:center;
  position: relative;
  margin-bottom: 16px;
  padding: 0 15px;

  
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  max-width:600px;
  outline:transparent;
  
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  color:#9966CC;
`;
