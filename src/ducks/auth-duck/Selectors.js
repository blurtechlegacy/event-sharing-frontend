export const selectError = state => {
  return state.auth.error;
};

export const selectToken = state => {
  return state.auth.requestToken;
};

export const selectAuthStatus = state => {
  return state.auth.isAuth;
};

export const selectUsername = state => {
  return state.auth.username;
};

export const selectPassword = state => {
  return state.auth.password;
};

export const selectUsers = state => {
  return state.auth.users;
};

export const selectUser = state => {
  return state.auth.user;
};
