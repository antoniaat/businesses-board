import { Business } from '../types/business';
import { SET_DATA, SET_IS_LOADING } from './actions';

const INITIAL_STATE = {
  isLoading: true,
  data: [],
};

interface ActionType {
  type: string,
  payload: {
    isLoading: boolean,
    data: Business[],
  }
}

const setIsLoading = (state: Object, action: ActionType) => (
  { ...state, isLoading: action.payload }
);

const setData = (state: Object, action: ActionType) => (
  { ...state, data: action.payload }
);

const rootReducer = (state: Object = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return setIsLoading(state, action);
    case SET_DATA:
      return setData(state, action);
    default:
      return state;
  }
};

export default rootReducer;
