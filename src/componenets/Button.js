import PropTypes from 'prop-types';

function Button(props) {
  const { digit, className, handleClick } = props;
  return (
    <button type="button" className={className} onClick={() => handleClick(digit)}>

      {digit}
    </button>
  );
}

Button.propTypes = {
  digit: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
