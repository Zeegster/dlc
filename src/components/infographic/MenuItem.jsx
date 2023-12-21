import PropTypes from 'prop-types'
// import setting from "../../assets/infographic/setting.svg";

const MenuItem = ({ title, setModal, index, image }) => {
  const isLast = index === 10 - 1;
  const toggleModal = () => {
    setModal((prev) => {
      const newMap = new Map(prev);
      newMap.set(index, !newMap.get(index));
      return newMap;
    });
  };

  return (
    <>
      <div
        onClick={toggleModal}
        className={`bg-blue-500  cursor-pointer  w-1/6 flex justify-center items-center text-center transition-all duration-200 hover:scale-105 shadow-md 
        ${isLast ? 'h-28' : 'h-52'} ${isLast ? 'w-2/4' : 'flex-col max-w-sm'}`}
      >
        {/* <img className="mb-4 text-black" src={setting} /> */}
        {image}

        <h3 className='text-sm font-medium '>{title}</h3>
      </div>
    </>
  );
};
MenuItem.propTypes = {
  title: PropTypes.string,
  setModal:PropTypes.func,
  index:PropTypes.number,
  image:PropTypes.object,
}
export default MenuItem;
