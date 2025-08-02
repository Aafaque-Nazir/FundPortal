export const saveUser = (user) => {
  localStorage.setItem('intern', JSON.stringify(user));
};

export const getUser = () => {
  if (typeof window === 'undefined') return null;
  return JSON.parse(localStorage.getItem('intern'));
};

export const isLoggedIn = () => {
  return !!getUser();
};
