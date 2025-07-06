import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/auth-pages/components/Login';
import Signup from './pages/auth-pages/components/Signup';
import VerifyOtp from './pages/auth-pages/components/VerifyOtp';
import { CustomToaster } from '@utils/toast';
import useUserStore from '@store/userStore';
import ProtectedRoute from '@components/ProtectedRoute';
import PublicOnlyRoute from '@components/PublicOnlyRoute';

const App = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  return (
    <>
      <CustomToaster />

      <Routes>
        {/* Anyone can access this page */}
        <Route path="/" element={<div>This is Unprotected Route</div>} />

        {/* Auth pages - only show if user is NOT logged in */}
        <Route element={<PublicOnlyRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Route>

        {/* Dashboard and other private routes - only show if user IS logged in */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<div> <br/><br/><br/><br/> {user._id} {user.name} {user.identifier} <button onClick={() => navigate("/dashboard1")}>Next</button> </div>}
          />
          <Route
            path="/dashboard1"
            element={<div> <br/><br/><br/><br/> {user.name} {user.identifier} <button onClick={() => navigate("/dashboard")}>Back</button> </div>}
          />
          {/* Add more private routes here */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
