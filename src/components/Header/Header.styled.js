import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 550px;

  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ background }) => (background ? background : '')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: var(--second-text-color);
  font-weight: 300;
  font-size: 20px;

  margin-bottom: 70px;
  margin-top: 70px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 30px;

  :last-child {
    margin-right: 0;
  }
`;

export const Link = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;

  color: var(--second-text-color);
  transition: color var(--hover-animation);

  :hover,
  :focus {
    color: var(--main-text-color);
  }

  &.active {
    color: var(--accent-text-color);
  }
`;
