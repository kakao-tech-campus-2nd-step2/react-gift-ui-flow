import React from 'react';
import { Navigate, useLocation} from 'react-router-dom';


interface PrivateRouteProps {
	children: JSX.Element;
	isLoggedIn: boolean;
  }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isLoggedIn }) => {
	const user = sessionStorage.getItem('username');
	const location = useLocation();

	if (!user || !isLoggedIn) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return children;
};

export default PrivateRoute;
