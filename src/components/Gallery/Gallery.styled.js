import styled from '@emotion/styled';

export const List = styled.ul`
  width: 300px;
  padding: 50px 0 50px 0;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
