import styled from '@emotion/styled';
import { BiPlusMedical } from 'react-icons/bi';

export const ButtonTemplate = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 30px;
  padding: 0;

  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);

  border: none;
  border-radius: 5px;

  background-color: var(--second-bg-color);
  color: var(--second-text-color);

  cursor: pointer;
  transition: color var(--hover-animation);

  :hover,
  :focus {
    color: var(--accent-bg-color);
  }
`;

export const Icon = styled(BiPlusMedical)`
  margin-left: 10px;
`;
