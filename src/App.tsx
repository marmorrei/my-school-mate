import NavBar from './components/NavBar/NavBar';
// import Home from './pages/Home/Home';
import './App.css';
import TeacherTabs from './pages/TeacherTabs/TeacherTabs';
import { memo } from 'react';

export const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <TeacherTabs />
      {/* <Home /> */}
    </>
  );
};

export const MemoizedApp = memo(App);
