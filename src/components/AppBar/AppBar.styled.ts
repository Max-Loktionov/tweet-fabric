import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NAVLink = styled(NavLink)`
  padding: 4px;
  text-decoration: none;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    margin: 20px;
    font-weight: 700;
    font-size: 24px;
  }
  &.active {
    color: white;
    background-color: #6c696ca1;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
