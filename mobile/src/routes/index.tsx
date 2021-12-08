import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AdminRoutes from './admin.routes';

import {useAuth} from '../hooks/auth';

const Routes: React.FC = () => {
  const {user} = useAuth();

  if (user?.roles.includes('ADM')) {
    return <AdminRoutes />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
