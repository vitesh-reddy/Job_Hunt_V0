import { Route, Routes } from 'react-router-dom';
import { CustomToaster } from '@utils/toast';

import PublicRoutes from '@routes/PublicRoutes';
import ProtectedRoutes from '@routes/ProtectedRoutes';
import PublicOnlyRoutes from '@routes/PublicOnlyRoutes';

const App = () => {
  return (
    <>
      <CustomToaster />

      <Routes>
        {/* Can be access by any users */}
        {PublicRoutes()}
        {/* Can be access by non authenticated users */}
        {PublicOnlyRoutes()}
        {/* Can be access by authenticated users */}
        {ProtectedRoutes()}
      </Routes>
    </>
  );
};

export default App;
