import PropTypes from 'prop-types';

function Button({ color, title, onClick, backgroundColor }) {
  return (
    <button className="btn" onClick={onClick} type="submit" style={{ color, backgroundColor }}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  color: 'Block',
  title: 'Add',
  onClick: '',
};

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
