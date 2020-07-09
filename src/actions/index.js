/* eslint-disable import/prefer-default-export */
export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
  });
  
  export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
  });
  
  export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
  });
  
  export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload,
  });
  
  export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
  });
  
  export const contactRequest = payload => ({
    type: 'CONTACT_REQUEST',
    payload,
  });
  export const getBlogToRead = payload => ({
    type: 'GET_BLOG_TO_READ',
    payload,
  });
  
  export const blogSearch = payload => ({
    type: 'BLOG_SEARCH',
    payload,
  });