import { Business } from '../types/business';

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

const defaultBusinessData: Business[] = new Array(10).fill(emptyBusiness);

export { defaultBusinessData };
