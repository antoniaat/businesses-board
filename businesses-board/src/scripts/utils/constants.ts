import { Business } from '../types/business';

const emptyBusiness: Business = {
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

export { emptyBusiness };
