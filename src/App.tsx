import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import TeacherTabs from './pages/TeacherTabs/TeacherTabs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/teacher' element={<TeacherTabs />} />
      </Routes>
    </>
  );
};

export default App;
