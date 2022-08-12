const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, loading: true, error: false };
    case 'AUTH_SUCCESS':
      // STORE THE AUTH DATA IN THE LOCAL STORAGE
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      // --------------------------------------------------------------
      return { ...state, loading: false, authData: action.data, error: false };
    case 'AUTH_FAIL':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default authReducer;
