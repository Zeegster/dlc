import HeaderInner from '../components/HeaderInner';
import QuizComponent from './QuizComponent';
import HomePageButton from '../components/buttons/HomePageButton';

const Tester = () => {

  return (
    <div className='h-screen relative  '>
      <HeaderInner title='Основные сведения об электрическом освещении' />
      <div className='flex  m-auto'>

      <QuizComponent 
        QuestionIndex={10}
      />
      </div>

      <HomePageButton />
    </div>
  );
};

export default Tester;
