/* eslint-disable import/prefer-default-export */

import { Business } from './types/business';

const emptyBusiness = {
  id: '',
  name: '',
  description: '',
  phone: '',
  image: '',
  email: '',
  address: {
    number: '',
    street: '',
    zip: '',
    city: '',
    country: '',
  },
};

const defaultBusinessesData: Business[] = new Array(10).fill(emptyBusiness);

export { defaultBusinessesData };
