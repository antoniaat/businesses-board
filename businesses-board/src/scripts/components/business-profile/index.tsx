import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Business } from '../../types/business';
import { defaultBusinessData } from '../../utils/constants';
import Address from './address';
import Contact from './contact';
import NearbyPlaces from './nearby-places';

interface BusinessProfileProps {
  isLoading?: boolean,
  data: Business[],
}

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

const BusinessProfile: React.FC<BusinessProfileProps> = (
  {
    isLoading = true,
    data = defaultBusinessData,
  },
) => {
  const params: { id: string } = useParams();
  const { id } = params;

  const {
    name,
    description,
    phone,
    image,
    email,
    address,
  } = getById(id, data);

  const {
    number, street, zip, city, country,
  } = address;

  const nearbyPlaces = getNearbyPlaces(id, country, data);

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
      <NearbyPlaces places={nearbyPlaces} />
    </section>
  );
};

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(BusinessProfile);
