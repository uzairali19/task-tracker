import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color="white"
          title={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
          backgroundColor={showAdd ? 'black' : 'green'}
        />
      )}
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
