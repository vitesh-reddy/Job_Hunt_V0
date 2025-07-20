import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomePage from "@pages/home-page"; 

const PublicRoutes = () => (
  <Route path="/" element={<HomePage />} />
);

export default PublicRoutes;
