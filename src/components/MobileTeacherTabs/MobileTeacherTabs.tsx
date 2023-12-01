import { teacherTabs } from '../DesktopTeacherTabs/DesktopTeacherTabs';

const MobileTeacherTabs = (): JSX.Element => {
  const tabs = teacherTabs;
  return (
    <ul
      className='lg:hidden menu menu-md menu-horizontal w-auto py-0 mt-0 text-primary
                      font-semibold bg-[#F2F7F8] self-start'
    >
      <li>
        <div className='dropdown flex justify-start items-start'>
          <label tabIndex={0} htmlFor='my-tabs' className='btn btn-ghost'>
            My tabs
          </label>
          <ul
            tabIndex={0}
            id='my-tabs'
            className='menu menu-sm dropdown-content mt-2 z-[1] px-0 ml-0 bg-[#F2F7F8] 
                        rounded-box w-auto space-y-3'
          >
            {tabs}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default MobileTeacherTabs;
