// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuthStore from '@store/authStore';
import userApi from '@services/userApi';

const ProtectedRoute = () => {
  const { isAuthenticated, login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If user is not logged in, try to fetch user from backend
    const verifyAuth = async () => {
      try {
        const response = await userApi.getCurrentUser();

        if (response.user) login(); // Set auth state if user found
      } catch (error) {
        console.error('Failed to verify auth:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    if (!isAuthenticated) verifyAuth();
    else setIsLoading(false);
  }, [isAuthenticated, login]);

  // Show loading screen while checking auth
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;

