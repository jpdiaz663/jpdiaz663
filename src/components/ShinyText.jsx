import './ShinyText.css';
// PropTypes library for runtime type checking
import PropTypes from 'prop-types';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration }}>
      {text}
    </div>
  );
};

// PropTypes validation for ShinyText component
ShinyText.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    speed: PropTypes.number,
    className: PropTypes.string
};

export default ShinyText;
