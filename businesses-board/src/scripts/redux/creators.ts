import { SET_IS_LOADING } from './actions';

export const setIsLoading = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
