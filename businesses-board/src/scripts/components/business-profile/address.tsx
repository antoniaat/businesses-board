import React from 'react';
import { Address as AddressType } from '../../types/business';

const Address: React.FC<AddressType> = ({
  number, street, zip, city, country,
}) => (
  <section className="address">
    <article className="address-street">
      {number}
      {street}
    </article>
    <article className="address-country">
      {country}
      ,
      {zip}
      {city}
    </article>
  </section>
);

export default Address;
