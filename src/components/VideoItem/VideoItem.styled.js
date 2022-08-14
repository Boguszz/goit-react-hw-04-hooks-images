import styled from '@emotion/styled';

export const Item = styled.li`
  width: 300px;
  margin-bottom: 15px;

  overflow: hidden;
  cursor: pointer;
  transform: scale(1);
  transition: transform var(--hover-animation);

  :hover,
  :focus {
    transform: scale(1.02);
  }

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: stretch;
    justify-content: center;

    width: calc((100% - 4 * 15px) / 2);
    margin: 15px;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 6 * 15px) / 3);
  }
`;
