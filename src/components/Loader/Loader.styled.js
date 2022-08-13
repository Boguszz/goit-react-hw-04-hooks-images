import styled from '@emotion/styled';
import { MdOutlineCameraswitch } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

  color: var(--accent-bg-color);
`;

export const Icon = styled(MdOutlineCameraswitch)`
  width: 40px;
  height: 40px;
  fill: currentColor;
`;
