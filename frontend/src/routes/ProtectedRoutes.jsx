import { Route } from 'react-router-dom';
import ProtectedRoute from '@routes/ProtectedRoute';
import MyAccount from '@pages/my-account';
import TestDashboard from '@/TestDashboard';
import ResumeBuilder from '@pages/resume-builder/Index';
import JobHuntDashboardWrapper from '@pages/JobTracking/JobHuntDashboard';

import RecruitersPage from "@pages/recruiters-page1";
import FindRecruiters from "@pages/recruiters-page2";
import ExtensionPage from "@pages/extension-page";
import JobCardDetail from '@pages/recruiters-page2/components/JobCardDetail';
import Navbar from '@components/Navbar';

const Layout = ({children}) => {
  return (
    <div className='pt-24'>
      <Navbar/>
      {children}
    </div>
  )
}

const ProtectedRoutes = () => (
  <Route element={<ProtectedRoute />}>

    {/* added by Vitesh */}
    <Route path="/dashboard" element={<Layout><TestDashboard /></Layout>} />
    <Route path="/account" element={<Layout> <MyAccount /></Layout>} />
    <Route path="/resume-builder" element={<Layout><ResumeBuilder /></Layout>} />

    {/* added by Vinay */}
    <Route path="/job-tracking" element={<Layout><JobHuntDashboardWrapper /></Layout>}/>

    {/* added by Kasturi */}
    <Route path="/recruiters" element={<RecruitersPage />} />
    <Route path="/find-recruiters" element={<FindRecruiters />} />
    <Route path="/extension" element={<ExtensionPage />} />
    <Route path="/jobcardDetail" element={<JobCardDetail />} />
  </Route>
);

export default ProtectedRoutes;
