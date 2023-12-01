const NotFound = (): JSX.Element => {
  return (
    <div className='flex justify-center items-center h-80'>
      <div
        role='alert'
        className='alert bg-info flex justify-center w-3/4 border-primary border-2'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-secondary shrink-0 w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span className='text-accent font-bold'>404 NOT FOUND</span>
      </div>
    </div>
  );
};

export default NotFound;
