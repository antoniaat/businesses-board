import { Business } from '../types/business';

interface DataLoading {
  type: 'data/LOADING',
  payload: boolean,
}

interface DataLoaded {
  type: 'data/LOADED',
  payload: Business[],
}

interface ProfileLoaded {
  type: 'profile/LOADED',
  payload: Business,
}

export const setIsLoading = (action: { payload: boolean }) => (
  { type: 'data/LOADING', payload: action.payload }
);

export const setData = (action: { payload: Business[] }) => (
  { type: 'data/LOADED', payload: action.payload }
);

export const setProfile = (action: { payload: Business }) => (
  { type: 'profile/LOADED', payload: action.payload }
);

export type Action = DataLoading | DataLoaded | ProfileLoaded;
