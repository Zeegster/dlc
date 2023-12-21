import PropTypes from 'prop-types'

const Theme = ({data}) => {
  return (
    <div className="w-full bg-gray-100 shadow-2xl font-semibold flex items-center justify-between p-4 space-x-2 mb-28 z-10 relative">
      <div className="text-blue-200 text-4xl font-dela uppercase ">Тема</div>
      <div className="text-blue-100 text-center text-xl font-dela max-w-4xl uppercase">
      {data.theme}
      </div>
      <div className="text-blue-200 text-4xl font-dela ">СПО</div>
    </div>
  );
}; 
Theme.propTypes = {
  data: PropTypes.object
}
export default Theme;
