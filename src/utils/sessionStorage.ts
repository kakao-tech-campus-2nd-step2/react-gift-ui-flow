export const getAccessToken = () => {
  return sessionStorage.getItem("accessToken");
};

export const setAccessToken = (accessToken: string) => {
  sessionStorage.setItem("accessToken", accessToken);
};

export const removeAccessToken = () => {
  sessionStorage.removeItem("accessToken");
};
