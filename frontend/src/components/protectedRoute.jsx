// src/components/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuthStore from '../store/authStore'

const PUBLIC_ROUTES = ['/'] // Landing page route

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore()
  const location = useLocation()

  const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname)

  if (isPublicRoute) {
    return <Outlet />
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  )
}

export default ProtectedRoute
