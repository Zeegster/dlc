import PropTypes from 'prop-types';

const CommonButton = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-sm font-semibold cursor-pointer  text-blue-200 transition-all duration-200 ${
        disabled ? '' : 'hover:text-blue-100 hover:bg-blue-50 active:scale-95'
      } bg-white disabled:cursor-not-allowed disabled:bg-gray-100`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
CommonButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
export default CommonButton;
