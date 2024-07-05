import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/contexts/Authcontext';


interface PrivateRouteProps {
	children: JSX.Element;
  }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children}) => {
	const {isLoggedIn} = useAuth();
	const location = useLocation();

	if (!isLoggedIn) {
		console.log(location)
		return <Navigate to="/login" state={{ from: location }}/>;
	}

	return children;
};

export default PrivateRoute;
