const useLogout = () => {
  const handleLogoutClick = () => {
    sessionStorage.removeItem('authToken');

    window.location.href = '/';
  };

  return {
    handleLogoutClick,
  };
};

export default useLogout;
