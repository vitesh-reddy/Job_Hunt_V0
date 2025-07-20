import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuthStore from '@store/authStore';
import userApi from '@services/userApi';

const ProtectedRoute = () => {
  const { isAuthenticated, login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {    
    const verifyAuth = async () => {
      try {
        console.log('Fetching')
        const response = await userApi.getCurrentUser();

        if (response.user) login();
      } catch (error) {
        console.error('Failed to verify auth:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    if (!isAuthenticated) verifyAuth();
    else setIsLoading(false);
  }, [isAuthenticated, login]);

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

