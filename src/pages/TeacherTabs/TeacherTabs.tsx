import Communication from '../../components/Communication/Communication';
import Dashboard from '../../components/Dashboard/Dashboard';
import Documentation from '../../components/Documentation/Documentation';
import Evaluation from '../../components/Evaluation/Evaluation';
import LearningSituations from '../../components/LearningSituations/LearningSituations';
import Settings from '../../components/Settings/Settings';
import Students from '../../components/Students/Students';
import TimetableCalendar from '../../components/TimetableCalendar/TimetableCalendar';

const TeacherTabs = (): JSX.Element => {
  return (
    // Missing dropdown menu for responsiveness
    <div role='tablist' className='tabs tabs-lifted bg-neutral/20'>
      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Dashboard'
        defaultChecked
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <Dashboard />
      </div>

      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Students'
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <Students />
      </div>

      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Timetable/Calendar'
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <TimetableCalendar />
      </div>

      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Learning situations'
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <LearningSituations />
      </div>

      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Evaluation'
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <Evaluation />
      </div>

      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Communication'
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <Communication />
      </div>

      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Documentation'
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <Documentation />
      </div>

      <input
        type='radio'
        name='my_tabs_2'
        role='tab'
        className='tab w-max'
        aria-label='Settings'
      />
      <div
        role='tabpanel'
        className='tab-content bg-base-100 border-base-300 rounded-box p-10'
      >
        <Settings />
      </div>
    </div>
  );
};

export default TeacherTabs;
