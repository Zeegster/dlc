import HeaderInner from '../components/HeaderInner';
import QuizComponent from './QuizComponent';
import HomePageButton from '../components/buttons/HomePageButton';
import { questions } from '../store/StoreStepper';

const Tester = () => {
  let keys = questions[3].filter(q => q.hasOwnProperty('key')).map(q => q.key);
  let values = questions[3].filter(q => q.hasOwnProperty('value')).map(q => q.value);
console.log(values);
console.log(keys);

  return (
    <div className='h-screen relative  '>
      <HeaderInner title='Основные сведения об электрическом освещении' />
      <div className='flex  m-auto'>

      <QuizComponent 
        keys={keys}
        values={values}
      />
      </div>

      <HomePageButton />
    </div>
  );
};

export default Tester;
