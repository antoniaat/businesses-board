import '../../../styles/components/business-profile/business-profile-address.scss';

import React from 'react';

import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';
import { Profile } from '../../types/business-profile';

import ContentLoading from '../content-loading';

const BusinessProfileAddress: React.FC<Profile> = ({ profile: { address } }) => {
  const {
    number, street, country, zip,
  } = address;

  const streetText = `${zip} ${street}`;
  const countryText = `${country}, ${number}`;

  return (
    <section className="business-profile-address">
      <h4 className="business-profile-address-title">
        <ContentLoading text="Address" />
      </h4>
      <article className="business-profile-address-street">
        <ContentLoading text={streetText} />
      </article>
      <article className="business-profile-address-country">
        <ContentLoading text={countryText} />
      </article>
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(BusinessProfileAddress);
