import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
	const auth = sessionStorage.getItem('authToken');
	const location = useLocation();

	if (!auth) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return children;
};

export default PrivateRoute;
