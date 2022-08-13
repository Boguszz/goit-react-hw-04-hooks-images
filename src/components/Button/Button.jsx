import { ButtonTemplate, Icon } from './Button.styled';

const Button = ({ onNextFetch }) => {
  return (
    <ButtonTemplate type="button" onClick={onNextFetch}>
      Load more <Icon />
    </ButtonTemplate>
  );
};

export default Button;
