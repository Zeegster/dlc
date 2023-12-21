
import PropTypes from 'prop-types';


const CommonButton = ({text,onClick}) => {
  

  return (
    
      <button
        onClick={onClick}
        className='py-3 px-6 rounded-sm font-semibold cursor-pointer text-blue-200 transition-all duration-200 hover:text-blue-100 hover:bg-blue-50 bg-white'
      >
        {text}
      </button>
  
  );
};
CommonButton.propTypes={
  text:PropTypes.string,
  onClick:PropTypes.func
}
export default CommonButton;
