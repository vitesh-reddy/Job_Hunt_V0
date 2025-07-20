import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '@store/authStore';
import { useEffect, useState } from 'react';
import userApi from '@services/userApi';

const PublicOnlyRoute = () => {
  const { isAuthenticated, login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If user is not logged in, try to fetch user from backend
    const verifyAuth = async () => {
      try {
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
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicOnlyRoute;
