import PropTypes from 'prop-types';

const HeaderInner = ({ title, subtitle }) => {
  return (
    <header className="w-full relative">
      <div className="flex max-h-full w-full bg-blue-100 items-center justify-center mb-4">
        <h1 className="text-3xl font-dela my-4 text-center text-white">{title}</h1>
      </div>
      <div className={subtitle !== undefined ? "border-b border-blue-400 h-auto pb-4 w-[95%] m-auto mb-4"  : "border-none"} >
        <h2 className="text-blue-100 text-xl text-center font-medium max-w-4xl mx-auto">
          {subtitle}
        </h2>
      </div>
      
    </header>
  );
};

HeaderInner.propTypes={
  title:PropTypes.string,
  subtitle:PropTypes.string
}

export default HeaderInner;
