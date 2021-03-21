import React from 'react';
import { connect } from 'react-redux';
import { Business } from '../../types/business';

interface Props {
  profile?: {
    address?: {
      number: string,
      street: string,
      country: string,
      zip: string,
      city: string,
    },
  }
}

const Address: React.FC<Props> = ({ profile = {} }) => {
  const {
    number, street, country, zip, city,
  } = profile.address || {};

  return (
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
};

const mapStateToProps = (state: { profile: Business }) => state;

export default connect(mapStateToProps)(Address);
