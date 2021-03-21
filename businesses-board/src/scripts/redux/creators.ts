import { Business } from '../types/business';
import { SET_DATA, SET_IS_LOADING, SET_PROFILE } from './actions';

export const setIsLoading = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const setData = (data: Business[]) => ({
  type: SET_DATA,
  payload: data,
});

export const setProfile = (profile: Business) => ({
  type: SET_PROFILE,
  payload: profile,
});
