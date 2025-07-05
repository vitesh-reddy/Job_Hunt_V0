import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/auth-pages/components/Login';
import Signup from './pages/auth-pages/components/Signup';
import VerifyOtp from './pages/auth-pages/components/VerifyOtp';

const App = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<div>This is Unprotected Route</div>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/verify-otp" element={<VerifyOtp />} />

    {/* Protected Routes */}
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<div>hii</div>} />
    </Route>
  </Routes>
);

export default App;