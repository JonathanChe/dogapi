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
    case SEARCH: {
      console.log('testing')
      return {
        ...state,
        search: action.input,
      }
    }
    case REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case RECEIVED:
      return {
        ...state,
        loading: false,
        breeds: action.breeds,
      }
    case FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
      default:
      return state;
  }
};

export default dogReducer;
