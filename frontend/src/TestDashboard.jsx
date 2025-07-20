import { useNavigate } from 'react-router-dom';
import useUserStore from '@store/userStore';
import authApi from '@services/authApi';

const TestDashboard = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();


  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, <span className="text-blue-600">{user.name}</span> 👋
      </h1>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-medium">Identifier:</span> {user.identifier}</p>
        <p><span className="font-medium">Verified:</span> {user.isVerified ? 'Yes' : 'No'}</p>
        <p>
          <span className="font-medium">Location:</span>{' '}
          {user.location?.city || '-'}, {user.location?.state || '-'}, {user.location?.country || '-'}
        </p>
        <p>
          <span className="font-medium">Job Status:</span>{' '}
          {user.jobSearchStatus || 'Not set'}
        </p>
      </div>
      <div className='flex gap-3'>

        <button
          onClick={() => navigate('/account')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          Go to My Account
        </button>
        <button
          onClick={() => navigate('/resume-builder')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          Go to Resume Builder
        </button>
        <button
          onClick={async () => authApi.logout()}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TestDashboard;
