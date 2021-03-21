import { Business } from '../types/business';
import { defaultBusinessData, emptyBusiness } from '../utils/constants';
import { Action } from './actions';

export interface StoreState {
  isLoading: boolean,
  data: Business[],
  profile: Business,
}

const INITIAL_STATE: StoreState = {
  isLoading: true,
  data: defaultBusinessData,
  profile: emptyBusiness,
};

const rootReducer = (state: StoreState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'data/LOADING':
      return { ...state, isLoading: action.payload };
    case 'data/LOADED':
      return { ...state, data: action.payload };
    case 'profile/LOADED':
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
