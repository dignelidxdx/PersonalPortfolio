const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_BLOG_TO_READ':
      return {
        ...state,
        readBlog: state.blogs.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case 'BLOG_SEARCH':
      if (action.payload === '' || !action.payload) return { ...state, myBlog: [] };
      return {
        ...state,
        myBlog: state.blogs.concat(state.blogs).filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())),
      };
    default:
      return state;
  }
};

export default reducer;
