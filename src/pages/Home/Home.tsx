const Home = (): JSX.Element => {
  return (
    <main className="flex flex-col space-y-6 bg-cover bg-no-repeat bg-center bg-[url('/assets/images/bg-spiral.svg')] ">
      <div className='hero h-4/6 w-full'>
        <div className='hero-content flex-col lg:flex-row-reverse lg:p-28'>
          <img
            src='/assets/images/teaching.svg'
            className='w-5/6 md:w-2/4 rounded-lg'
          />
          <div className=''>
            <img
              className='max-h-44'
              src='/assets/images/my-school-mate-title.svg'
              alt='title'
            />
            <p className='py-6 text-secondary text-md font-bold'>
              The solution for teachers to manage their daily routines in an
              simple way and focus on what really matters
            </p>
            <button
              className='btn btn-sm btn-info border-2 border-primary text-primary 
                          hover:border-info hover:bg-transparent'
            >
              See details
            </button>
          </div>
        </div>
      </div>
      <div className='hero h-4/6 w-full'>
        <div className='hero-content flex-col lg:flex-row lg:p-28'>
          <img
            src='/assets/images/home-learning.svg'
            className='w-5/6 md:w-2/4 rounded-lg'
          />
          <div>
            <h1 className='pt-20 text-4xl font-bold'>
              <span className='text-secondary'>Connects </span>
              <span className='text-info'>Schools and </span>
              <span className='text-accent'>Families</span>
            </h1>
            <p className='pt-20 pb-8 text-accent text-md font-bold'>
              Efficient communication between the school and the families has
              never been easier.
            </p>
            <button
              className='btn btn-sm btn-info border-2 border-primary text-primary 
                          hover:border-info hover:bg-transparent'
            >
              More info
            </button>
          </div>
        </div>
      </div>
      <div className='hero h-4/6 w-full'>
        <div className='hero-content flex-col lg:flex-row-reverse lg:p-28'>
          <img
            src='/assets/images/my-school-mate-devices.svg'
            className='w-5/6 md:w-2/4 rounded-lg'
          />
          <div>
            <h1 className='mt-20 text-4xl font-bold'>
              <span className='text-info'>Responsive </span>
              <span className='text-accent'>Design</span>
            </h1>
            <p className='pt-20 pb-8 text-secondary text-md font-bold'>
              User friendly UI to access to My School Mate in all your devices
            </p>
            <button
              className='btn btn-sm btn-info border-2 border-primary text-primary 
                          hover:border-info hover:bg-transparent'
            >
              See demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
