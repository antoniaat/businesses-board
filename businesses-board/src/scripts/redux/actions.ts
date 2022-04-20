import { Business } from '../types/business';

interface DataLoaded {
  type: 'data/LOADED',
  payload: Business[],
}

interface ProfileLoaded {
  type: 'profile/LOADED',
  payload: Business,
}

export const setData = (action: { payload: Business[] }) => (
  { type: 'data/LOADED', payload: action.payload }
);

export const setProfile = (action: { payload: Business }) => (
  { type: 'profile/LOADED', payload: action.payload }
);

export type Action = DataLoaded | ProfileLoaded;
