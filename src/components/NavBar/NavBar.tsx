import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  return (
    <div className='navbar bg-[#F2F7F8] border-b-2 border-secondary h-20 lg:h-16 lg:fixed lg:z-40 '>
      <div className='navbar-start flex'>
        <NavLink to='/' className='btn btn-ghost'>
          <img
            className='max-h-14 lg:max-h-12'
            src='/assets/images/my-school-mate-logo.svg'
            alt='MSM-logo'
          />
        </NavLink>
      </div>
      <div className='navbar-center hidden lg:flex lg:space-x-32'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a className='text-primary font-bold hover:text-secondary' href='#'>
              SCHOOLS
            </a>
          </li>
          <li>
            <a className='text-primary font-bold hover:text-secondary' href='#'>
              FAMILIES
            </a>
          </li>
        </ul>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>
              <img
                className='max-h-5'
                src='/assets/images/united-kingdom.png'
                alt='eng'
              />
            </a>
          </li>
          <li>
            <a>
              <img
                className='max-h-5'
                src='/assets/images/spain.png'
                alt='esp'
              />
            </a>
          </li>
          <li>
            <a>
              <img
                className='max-h-5'
                src='/assets/images/catalonia.png'
                alt='cat'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown flex justify-end'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <img
              className='max-h-7'
              src='/assets/images/burger-simple-svgrepo-com.svg'
              alt='burger'
            />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-white rounded-box w-40 space-y-3'
          >
            <li>
              <NavLink
                to='/login'
                className='btn btn-sm btn-info border-2 border-primary text-primary 
                            hover:border-info hover:bg-transparent'
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/signup'
                className='btn btn-sm btn-neutral border-2 border-primary text-primary 
                            hover:border-neutral hover:bg-transparent'
              >
                Register
              </NavLink>
            </li>
            <li className='items-end'>
              <a
                className='text-primary font-bold hover:text-secondary'
                href='#'
              >
                SCHOOLS
              </a>
            </li>
            <li className='items-end'>
              <a
                className='text-primary font-bold hover:text-secondary'
                href='#'
              >
                FAMILIES
              </a>
            </li>
            <li className='items-end'>
              <a>
                <img
                  className='max-h-5'
                  src='/assets/images/united-kingdom.png'
                  alt='eng'
                />
              </a>
            </li>
            <li className='items-end'>
              <a>
                <img
                  className='max-h-5'
                  src='/assets/images/spain.png'
                  alt='esp'
                />
              </a>
            </li>
            <li className='items-end'>
              <a>
                <img
                  className='max-h-5'
                  src='/assets/images/catalonia.png'
                  alt='cat'
                />
              </a>
            </li>
          </ul>
        </div>
        <ul className='menu menu-horizontal px-1 hidden lg:flex lg:space-x-2'>
          <li>
            <NavLink to='/login'>
              <button
                className='btn btn-sm btn-info border-2 border-primary text-primary 
                                  hover:border-info hover:bg-transparent'
              >
                Login
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup'>
              <button
                className='btn btn-sm btn-neutral border-2 border-primary text-primary 
                                  hover:border-neutral hover:bg-transparent'
              >
                Register
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
