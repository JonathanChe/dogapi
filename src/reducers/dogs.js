import { REQUEST, RECEIVED, FAILED, SEARCH } from '../constants/index';

const dogReducer = (
  state = {
    loading: false,
    search: '',
    breeds: [],
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.input,
      }
    case REQUEST:
      return {
        loading: true,
        ...state,
      }
    case RECEIVED:
      return {
        ...state,
        loading: false,
        breeds: action.breeds,
      }
    case FAILED:
      return {
        loading: false,
        error: action.error,
        ...state,
      }
    default:
      return state;
  }
};

export default dogReducer;
