import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  &.active,
  &:hover {
    color: #d8bfd8;
  }
`;
