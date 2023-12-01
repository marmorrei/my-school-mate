import { NavLink } from 'react-router-dom';
const MobileTeacherTabs = (): JSX.Element => {
  return (
    <ul
      className='lg:hidden menu menu-md menu-horizontal w-auto py-0 mt-0 text-primary
                      font-semibold bg-[#F2F7F8] self-start'
    >
      <li>
        <div className='dropdown flex justify-start items-start'>
          <label tabIndex={0} className='btn btn-ghost'>
            My tabs
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-2 z-[1] px-0 ml-0 bg-[#F2F7F8] 
                        rounded-box w-auto space-y-3'
          >
            <li>
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to='/students'>Students</NavLink>
            </li>
            <li>
              <NavLink to='/calendar'>Timetable/Calendar</NavLink>
            </li>
            <li>
              <NavLink to='/learningsituations'>Learning situations</NavLink>
            </li>
            <li>
              <NavLink to='/evaluation'>Evaluation</NavLink>
            </li>
            <li>
              <NavLink to='/communication'>Communication</NavLink>
            </li>
            <li>
              <NavLink to='/documentation'>Documentation</NavLink>
            </li>
            <li>
              <NavLink to='/settings'>Settings</NavLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default MobileTeacherTabs;
