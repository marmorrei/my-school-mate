import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Students from './pages/Students/Students';
import TimetableCalendar from './pages/TimetableCalendar/TimetableCalendar';
import LearningSituations from './pages/LearningSituations/LearningSituations';
import Evaluation from './pages/Evaluation/Evaluation';
import Communication from './pages/Communication/Communication';
import Documentation from './pages/Documentation/Documentation';
import Settings from './pages/Settings/Settings';
import NotFound from './components/NotFound/NotFound';

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/students' element={<Students />} />
          <Route path='/calendar' element={<TimetableCalendar />} />
          <Route path='/learningsituations' element={<LearningSituations />} />
          <Route path='/evaluation' element={<Evaluation />} />
          <Route path='/communication' element={<Communication />} />
          <Route path='/documentation' element={<Documentation />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
