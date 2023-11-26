import { Navigate, Outlet } from 'react-router-dom';
import { useLoginContext } from '../context/UserProvider';

const ProtectedRoute = (): JSX.Element => {
  const { isLogged } = useLoginContext();

  if (!isLogged) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
