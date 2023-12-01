import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../context/UserProvider';
import { supabase } from '../../supabase/supabase';
import TeacherTabs from '../DesktopTeacherTabs/DesktopTeacherTabs';
import MobileTeacherTabs from '../MobileTeacherTabs/MobileTeacherTabs';
import { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../utils/api/fetchUserProfile';

const NavBar = (): JSX.Element => {
  const { isLogged } = useLoginContext();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | undefined>();

  useEffect(() => {
    void getUserName();
  }, [isLogged]);

  // OBTAIN USER NAME
  const getUserName = async (): Promise<void> => {
    let userId: string = '';
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user !== null) {
        userId = user.id;
      }
      void fetchUserProfile(userId).then(result => {
        console.log(result);
        setUserName(result[0].name);
        console.log(userName);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // LOGOUT
  const handleClick = async (): Promise<void> => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <>
      <div className='navbar flex justify-around bg-[#F2F7F8] border-b-2 border-secondary h-20 lg:h-16'>
        {/* LOGO */}
        <div className='navbar-start flex'>
          <NavLink to='/' className='btn btn-ghost'>
            <img
              className='max-h-14 lg:max-h-12'
              src='/assets/images/my-school-mate-logo.svg'
              alt='MSM-logo'
            />
          </NavLink>
        </div>
        <div className='navbar-center flex justify-center lg:flex lg:space-x-32'>
          {/* MOBILE TEACHER TABS */}
          {isLogged && <MobileTeacherTabs />}
          {/* DESKTOP NAVBAR CENTER */}
          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal px-10'>
              {!isLogged ? (
                // DESKTOP LOGGED OUT
                <>
                  <li>
                    <NavLink
                      to='/dashboard'
                      className='text-primary font-bold hover:text-secondary'
                    >
                      SCHOOLS
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className='text-primary font-bold hover:text-secondary'
                      href='#'
                    >
                      FAMILIES
                    </a>
                  </li>
                </>
              ) : (
                // DESKTOP LOGGED IN
                <li>
                  <NavLink
                    to='/dashboard'
                    className='text-primary font-bold hover:text-secondary'
                  >
                    MY DESK
                  </NavLink>
                </li>
              )}
            </ul>
            {/* DESKTOP LANGUAGES BUTTONS */}
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
        </div>
        <div className='navbar-end'>
          {/* MOBILE DROPDOWN NAVBAR END */}
          <div className='dropdown flex justify-end w-auto'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <img
                className='max-h-7'
                src='/assets/images/burger-simple-svgrepo-com.svg'
                alt='burger'
              />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-2 z-[1] p-2 bg-[#F2F7F8] rounded-box w-36 space-y-3'
            >
              {isLogged ? (
                // MOBILE LOGGEG IN
                <>
                  <li className='text-primary font-bold text-center'>
                    Hello {userName?.toUpperCase()}
                  </li>
                  <li className='items-end'>
                    <button
                      className='btn btn-sm btn-info w-28 border-2 border-primary text-primary 
                                  hover:border-info hover:bg-transparent'
                      onClick={handleClick}
                    >
                      Log out
                    </button>
                  </li>
                </>
              ) : (
                // MOBILE LOGGED OUT
                <>
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
                </>
              )}
              {!isLogged ? (
                // MOBILE LOGGED OUT
                <>
                  <li className='items-end'>
                    <NavLink
                      to='/dashboard'
                      className='text-primary font-bold hover:text-secondary'
                    >
                      SCHOOLS
                    </NavLink>
                  </li>
                  <li className='items-end'>
                    <a
                      className='text-primary font-bold hover:text-secondary'
                      href='#'
                    >
                      FAMILIES
                    </a>
                  </li>
                </>
              ) : (
                // MOBILE LOGGED IN
                <li className='items-end'>
                  <NavLink
                    to='/dashboard'
                    className='text-primary font-bold hover:text-secondary'
                  >
                    MY DESK
                  </NavLink>
                </li>
              )}
              {/* MOBILE LANGUAGE BUTTONS */}
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
            {isLogged ? (
              // DESKTOP NAVBAR END LOGGED IN
              <>
                <li>
                  <p className='text-primary font-bold align-middle'>
                    Hello {userName?.toUpperCase()}
                  </p>
                </li>
                <li className='flex justify-center'>
                  <button
                    className='btn btn-sm btn-info border-2 border-primary text-primary 
                                  hover:border-info hover:bg-transparent'
                    onClick={handleClick}
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              // DESKTOP NAVBAR END LOGGED OUT
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
      {/* DESKTOP TEACHER TABS */}
      {isLogged && <TeacherTabs />}
    </>
  );
};

export default NavBar;
