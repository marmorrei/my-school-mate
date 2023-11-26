import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import TeacherTabs from './pages/TeacherTabs/TeacherTabs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useEffect } from 'react';
import { supabase } from './supabase/supabase';
import { useLoginContext } from './context/UserProvider';

const App = (): JSX.Element => {
  const { updateLoginState } = useLoginContext();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state:', event, session);
      session !== null ? updateLoginState(true) : updateLoginState(false);
    });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/teacher' element={<TeacherTabs />} />
        </Route>
        <Route path='*' element={<div>404 NOT FOUND</div>} />
      </Routes>
    </>
  );
};

export default App;
