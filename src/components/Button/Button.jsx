import PropTypes from 'prop-types';
import { ButtonTemplate, Icon } from './Button.styled';

const Button = ({ onNextFetch }) => {
  return (
    <ButtonTemplate type="button" onClick={onNextFetch}>
      Load more <Icon />
    </ButtonTemplate>
  );
};

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;
