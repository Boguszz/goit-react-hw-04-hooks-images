import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 30px;
  padding: 0;

  border: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  background-color: var(--second-bg-color);
  color: var(--second-text-color);

  cursor: pointer;
  transition: color var(--hover-animation);

  hover,
  focus {
    color: var(--accent-bg-color);
  }
`;

export const Icon = styled(FaSearch)`
  color: var(--main-bg-color);
`;

export const Input = styled.input`
  width: 180px;
  height: 30px;
  padding: 0 10px 0 10px;

  background-color: var(--main-bg-color);
  color: var(--main-text-color);

  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 700px;
  }

  .input:focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }

  .input::placeholder {
    color: #929292;
  }
`;
