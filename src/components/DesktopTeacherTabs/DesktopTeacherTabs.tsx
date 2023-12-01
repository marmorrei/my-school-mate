import { NavLink } from 'react-router-dom';

const DesktopTeacherTabs = (): JSX.Element => {
  return (
    <ul
      className='hidden lg:flex menu menu-sm menu-horizontal w-screen py-0 text-primary
                      font-semibold bg-[#F2F7F8] border-b-2 border-neutral'
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
  );
};

export default DesktopTeacherTabs;
