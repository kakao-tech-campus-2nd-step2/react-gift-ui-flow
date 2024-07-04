import React from 'react';

const MyAccountPage: React.FC = () => {
  const handleLogout = () => {
    alert('Logged out');
  };

  return (
    <div>
      <h1>My Account</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyAccountPage;
