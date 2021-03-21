import { SET_IS_LOADING } from './actions';

const INITIAL_STATE = {
  isLoading: true,
};

interface ActionType {
  type: string,
  payload: {
    isLoading: boolean
  }
}

const setIsLoading = (state: Object, action: ActionType) => (
  { ...state, isLoading: action.payload }
);

const rootReducer = (state: Object = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return setIsLoading(state, action);
    default:
      return state;
  }
};

export { setIsLoading };

export default rootReducer;
