import PropTypes from 'prop-types';

const CommonButton = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={` rounded-sm font-semibold cursor-pointer whitespace-nowrap  text-blue-200 transition-all duration-200   ${
        disabled ? 'w-0 disabled:cursor-not-allowed opacity-0 scale-0 ' : 'w-fit  py-3 px-6 hover:text-blue-100 hover:bg-blue-50 active:scale-95'
      } bg-white  scale-100 `}
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
