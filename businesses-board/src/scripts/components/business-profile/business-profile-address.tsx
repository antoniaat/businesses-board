import '../../../styles/components/business-profile/business-profile-address.scss';

import React from 'react';

import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';
import { Profile } from '../../types/business-profile';

const BusinessProfileAddress: React.FC<Profile> = ({ profile: { address } }) => {
  const {
    number, street, country, zip,
  } = address;

  const streetText = `${zip} ${street}`;
  const countryText = `${country}, ${number}`;

  return (
    <section className="business-profile-address">
      <h4 className="business-profile-address-title">Address</h4>
      <article className="business-profile-address-street">
        {streetText}
      </article>
      <article className="business-profile-address-country">
        {countryText}
      </article>
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(BusinessProfileAddress);
