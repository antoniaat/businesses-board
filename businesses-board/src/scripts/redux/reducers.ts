import { Business } from '../types/business';
import { defaultBusinessData, emptyBusiness } from '../utils/constants';
import { SET_DATA, SET_IS_LOADING, SET_PROFILE } from './actions';

const INITIAL_STATE = {
  isLoading: true,
  data: defaultBusinessData,
  profile: emptyBusiness,
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

const setProfile = (state: Object, action: ActionType) => (
  { ...state, profile: action.payload }
);

const rootReducer = (state: Object = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return setIsLoading(state, action);
    case SET_DATA:
      return setData(state, action);
    case SET_PROFILE:
      return setProfile(state, action);
    default:
      return state;
  }
};

export default rootReducer;
