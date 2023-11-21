const Home = (): JSX.Element => {
  return (
    <main>
      <div className="hero min-h-screen max-w-screen bg-[url('/assets/images/blob3.svg')]">
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src='/assets/images/teaching.svg'
            className='max-w-sm rounded-lg'
          />
          <div>
            <img
              className='max-h-44'
              src='/assets/images/my-school-mate-title.svg'
              alt='title'
            />
            <p className='py-6'>
              The solution for teachers to manage their daily routines in an
              simple way and focus on what really matters
            </p>
            <button className='btn btn-info'>See details</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-[url('/assets/images/blob5.svg')]">
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src='/assets/images/home-learning.svg'
            className='max-w-sm rounded-lg'
          />
          <div>
            <h1 className='text-5xl font-bold'>
              Connects Schools and Families
            </h1>
            <p className='py-6'>
              Efficient communication between the school and the families has
              never been easier.
            </p>
            <button className='btn btn-info'>More info</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-[url('/assets/images/blob1.svg')]">
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src='/assets/images/my-school-mate-devices.svg'
            className='max-w-sm rounded-lg'
          />
          <div>
            <h1 className='text-5xl font-bold'>Responsive Design</h1>
            <p className='py-6'>
              User friendly UI to access to My School Mate in all your devices
            </p>
            <button className='btn btn-info'>See demo</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
