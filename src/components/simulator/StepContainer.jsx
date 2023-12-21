import PropTypes from 'prop-types';

const StepContainer = ({ title, content, steps, activeStep, question}) => {
 return( <>
    <div className='text-black flex items-center w-full justify-between'>
      <h2 className='text-black text-2xl'>{title}</h2>
      <div className=''>
        <div className='bg-blue-200 py-2 px-6 ml-2 font-semibold text-xl'>
          <p className='w-16 text-center text-white'>
            { activeStep  + 1} / {steps}
          </p>
        </div>
      </div>
    </div>

    <div className='border-b border-blue-400 ' />

    <div className='container m-auto text-black font-normal overflow-y-auto flex flex-col text-lg'>
      {content}
      {question}
    </div>
  </>
  )
}
StepContainer.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  steps: PropTypes.number,
  activeStep: PropTypes.number,
  question:PropTypes.object
}

export default StepContainer