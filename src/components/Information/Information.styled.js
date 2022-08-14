import styled from '@emotion/styled';

export const Popup = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;

  width: 100%;

  color: var(--second-text-color);
  background-color: rgba(0, 0, 0, 0.7);

  transform: translateY(100%);
  transition: transform var(--hover-animation);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Text = styled.p`
  margin-left: 10px;
`;
