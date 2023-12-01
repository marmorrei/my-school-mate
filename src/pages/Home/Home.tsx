import { NavLink } from 'react-router-dom';

const Home = (): JSX.Element => {
  return (
    <main className="flex flex-col space-y-28 lg:space-y-6 py-14 lg:py-4 bg-cover bg-no-repeat bg-center bg-[url('/assets/images/bg-spiral.svg')] ">
      {/* BANNER 1 */}
      <div className='hero h-4/6 w-full'>
        <div className='hero-content flex-col lg:flex-row-reverse lg:p-28'>
          <img
            src='/assets/images/teaching.svg'
            className='w-5/6 md:w-2/4 rounded-lg'
          />
          <div className='flex flex-col	justify-center lg:items-start'>
            <img
              className='max-h-44'
              src='/assets/images/my-school-mate-title.svg'
              alt='title'
            />
            <p className='pb-6 text-secondary text-md font-bold self-center md:max-lg:w-3/4 lg:self-start'>
              The solution for teachers to manage their daily routines in an
              simple way and focus on what really matters
            </p>
            <NavLink to='/dashboard' className='self-center lg:self-start'>
              <button
                className='btn btn-sm btn-info border-2 border-primary text-primary 
                            hover:border-info hover:bg-transparent w-max'
              >
                See details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* BANNER 2 */}
      <div className='hero h-4/6 w-full'>
        <div className='hero-content flex-col lg:flex-row lg:p-28'>
          <img
            src='/assets/images/home-learning.svg'
            className='w-5/6 md:w-2/4 rounded-lg'
          />
          <div className='flex flex-col	justify-center lg:items-start'>
            <h1 className='pt-20 text-4xl text-center font-bold self-center lg:self-start lg:text-start'>
              <span className='text-secondary'>Connects </span>
              <span className='text-info'>Schools and </span>
              <span className='text-accent'>Families</span>
            </h1>
            <p className='pt-14 pb-8 text-accent text-md font-bold self-center lg:self-start'>
              Efficient communication between the school and the families has
              never been easier.
            </p>
            <NavLink to='/dashboard' className='self-center lg:self-start'>
              <button
                className='btn btn-sm btn-info border-2 border-primary text-primary 
                            hover:border-info hover:bg-transparent w-max'
              >
                More info
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* BANNER 3 */}
      <div className='hero h-4/6 w-full'>
        <div className='hero-content flex-col lg:flex-row-reverse lg:p-28 lg:space-x-12'>
          <img
            src='/assets/images/my-school-mate-devices.svg'
            className='w-5/6 md:w-2/4 rounded-lg'
          />
          <div className='flex flex-col	justify-center lg:items-start'>
            <h1 className='mt-20 text-4xl text-center font-bold self-center lg:self-start'>
              <span className='text-accent'>Responsive </span>
              <span className='text-info'>Design</span>
            </h1>
            <p className='pt-14 pb-8 text-secondary text-md font-bold self-center lg:self-start'>
              User friendly UI to access to My School Mate in all your devices
            </p>
            <NavLink to='/dashboard' className='self-center lg:self-start'>
              <button
                className='btn btn-sm btn-info border-2 border-primary text-primary 
                            hover:border-info hover:bg-transparent w-max'
              >
                See demo
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
