const SiteUnderConstruction = (): JSX.Element => {
  return (
    <div className='hero h-max mt-8 rounded-lg bg-white'>
      <div className='hero-content w-3/4 flex-col-reverse lg:flex-row lg:space-x-12'>
        <img
          src='/assets/images/my-school-mate-logo.svg'
          alt='logo'
          className='w-screen max-w-xs rounded-lg shadow-2xl'
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
