
const initialState = {
  listData: [],
  refreshing:false,
};

export default function demo(state = initialState, action) {
  switch (action.type) {
    case 'test/demo/refreshSuccess':
      return {
        ...state,
        ...action.payload
      };
    case 'test/demo/refresh':
      return {
        ...state,
        ...action.payload
      }
    case 'test/demo/reset':
      return {
        listData: []
      }
    default:
      return state;
  }
}