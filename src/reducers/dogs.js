import { REQUEST, RECEIVED, FAILED } from '../constants/index';

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
    case REQUEST:
      return {
        loading: true,
        ...state,
      }
    case RECEIVED:
      return {
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
