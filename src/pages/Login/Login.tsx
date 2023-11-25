import { NavLink } from 'react-router-dom';

const Login = (): JSX.Element => {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-14 w-auto'
          src='/public/assets/images/my-school-mate-logo.svg'
          alt='My School Mate'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
          <span className='text-secondary'>Sign in </span>
          <span className='text-info'>to your </span>
          <span className='text-accent'>account</span>
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-bold leading-6 text-accent'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block input w-full rounded-md border-0 py-1.5 text-primary 
                            input-primary input-sm bg-neutral/20'
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-bold leading-6 text-accent'
              >
                Password
              </label>
              <div className='text-sm'>
                <a
                  href='#'
                  className='font-semibold text-secondary hover:text-primary'
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block input w-full rounded-md border-0 py-1.5 text-primary 
                            input-primary input-sm bg-neutral/20'
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='btn btn-sm btn-info border-2 border-primary text-primary hover:border-info 
                            hover:bg-transparent'
            >
              Sign in
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-primary'>
          Not registered yet?{' '}
          <NavLink
            to='/signup'
            className='font-semibold leading-6 text-secondary hover:text-primary'
          >
            Create your account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
