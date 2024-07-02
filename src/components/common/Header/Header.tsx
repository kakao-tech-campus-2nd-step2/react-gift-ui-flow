import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
	<div>
		<Link to='/'>Home</Link>
    	<Link to='/Login'>내 계정</Link>
	</div>
  );
};

export default Header;
