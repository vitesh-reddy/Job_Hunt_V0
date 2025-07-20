import { Typography } from '@components/Typography';
import { useNavigate } from 'react-router-dom';

const TestLandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50 px-4">
      <Typography variant="3xl" className="text-blue-600">
        Welcome to Job Hunt 👋
      </Typography>
      <Typography variant="base" className="mt-2 text-gray-600">
        This is a public route. You’re not required to be logged in to view this page.
      </Typography>

      <div className='flex gap-2'>
        <button
          onClick={() => navigate('/login')}
          className="cursor-pointer mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >Login</button>
        <button
          onClick={() => navigate('/signup')}
          className="cursor-pointer mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >Register</button>
      </div>
    </div>
  );
};

export default TestLandingPage;
