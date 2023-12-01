import { NavLink } from 'react-router-dom';

const teacherTabsInfo = [
  {
    path: '/dashboard',
    tabName: 'Dashboard',
  },
  {
    path: '/students',
    tabName: 'Students',
  },
  {
    path: '/calendar',
    tabName: 'Timetable/Calendar',
  },
  {
    path: '/learningsituations',
    tabName: 'Learning situations',
  },
  {
    path: '/evaluation',
    tabName: 'Evaluation',
  },
  {
    path: '/communication',
    tabName: 'Comunication',
  },
  {
    path: '/documentation',
    tabName: 'Documentation',
  },
  {
    path: '/settings',
    tabName: 'Settings',
  },
];

export const teacherTabs = teacherTabsInfo.map(tab => (
  <li key={tab.tabName}>
    <NavLink to={tab.path}>{tab.tabName}</NavLink>
  </li>
));

const DesktopTeacherTabs = (): JSX.Element => {
  return (
    <ul
      className='hidden lg:flex menu menu-sm menu-horizontal w-screen py-0 text-primary
                      font-semibold bg-[#F2F7F8] border-b-2 border-neutral'
    >
      {teacherTabs}
    </ul>
  );
};

export default DesktopTeacherTabs;
