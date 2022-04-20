import { Business } from '../types/business';
import { emptyBusiness } from '../utils/constants';
import { Action } from './actions';

export interface StoreState {
  data: Business[],
  profile: Business,
}

const INITIAL_STATE: StoreState = {
  data: [emptyBusiness],
  profile: emptyBusiness,
};

const rootReducer = (state: StoreState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'data/LOADED':
      return { ...state, data: action.payload };
    case 'profile/LOADED':
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
