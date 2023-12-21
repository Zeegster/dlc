import { useNavigate } from 'react-router-dom';

const HomePageButton = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };

  return (
    <button
      onClick={routeChange}
      className='text-blue-200 text-xl p-3 rounded-t-none rounded-b-md 
      font-semibold whitespace-nowrap bg-blue-100 absolute top-1/2 
      right-full transform translate-x-[90px] -rotate-90 cursor-pointer
      transition-all duration-300 hover:scale-110'
    >
      На главную
    </button>
  );
};

export default HomePageButton;
