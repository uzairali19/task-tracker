import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="white"
        title={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        backgroundColor={showAdd ? 'black' : 'green'}
      />
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
