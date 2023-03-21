import PropTypes from 'prop-types';

function Button(props) {
  const { digit, className } = props;
  return (
    <button type="button" className={className}>
      {digit}
    </button>
  );
}

Button.propTypes = {
  digit: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
