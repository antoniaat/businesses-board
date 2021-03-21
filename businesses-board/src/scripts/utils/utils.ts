import { Business } from '../types/business';

const getClassName = (classNamesMap: { [key: string]: boolean }) => Object.keys(classNamesMap)
  .filter((className) => classNamesMap[className])
  .join(' ')
  .trim();

const getById = (
  id: string,
  profiles: Business[],
) => profiles.filter((el) => el.id === id)[0];

const getNearbyPlaces = (
  id: string,
  country: string,
  profiles: Business[],
) => profiles.filter(({ id: profileId, address }) => profileId !== id
  && address.country === country);

export { getClassName, getById, getNearbyPlaces };
