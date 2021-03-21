import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../utils/utils';
import { Business } from '../../types/business';
import NearbyPlaces from './nearby-places';
import Address from './address';
import Contact from './contact';

interface BusinessProfileProps {
  data: Business[],
}

const BusinessProfile: React.FC<BusinessProfileProps> = ({ data }) => {
  const params: { id: string } = useParams();
  const { id } = params;

  const {
    name,
    phone,
    image,
    email,
    address,
  } = getById(id, data);

  const {
    number, street, zip, city, country,
  } = address;

  return (
    <section>
      <img src={image} alt={name} />
      <Address
        number={number}
        street={street}
        zip={zip}
        city={city}
        country={country}
      />
      <Contact email={email} phone={phone} />
      <NearbyPlaces />
    </section>
  );
};

const mapStateToProps = (state: { data: Business[]}) => state;

export default connect(mapStateToProps)(BusinessProfile);
