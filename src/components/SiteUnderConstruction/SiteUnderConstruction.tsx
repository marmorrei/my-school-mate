const SiteUnderConstruction = (): JSX.Element => {
  return (
    <div className='hero h-max rounded-lg bg-neutral/20'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src='/public/assets/images/my-school-mate-logo.svg'
          className='max-w-xs rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-4xl font-bold text-primary'>
            New functionality comming soon...
          </h1>
          <p className='py-6 font-bold text-accent'>
            Don´t forget to stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteUnderConstruction;
