import { Navigate, Outlet } from 'react-router-dom';
import { useLoginContext } from '../context/UserProvider';

const ProtectedRoute = (): JSX.Element => {
  const { isLogged } = useLoginContext();

  return !isLogged ? <Navigate to='/login' /> : <Outlet />;
};

export default ProtectedRoute;
