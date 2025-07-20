import { Route } from 'react-router-dom';
import Login from '@pages/auth-pages/components/Login';
import Signup from '@pages/auth-pages/components/Signup';
import VerifyOtp from '@pages/auth-pages/components/VerifyOtp';
import ForgetPassword from '@pages/auth-pages/components/ForgetPassword';
import PublicOnlyRoute from '@routes/PublicOnlyRoute';
import ResetPassword from '@pages/auth-pages/components/ResetPassword';

const PublicOnlyRoutes = () => (
  <Route element={<PublicOnlyRoute />}>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/verify-otp" element={<VerifyOtp />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Route>
);

export default PublicOnlyRoutes;
