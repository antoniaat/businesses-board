import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';
import { Profile } from '../../types/business-profile';
import ContentLoading from '../content-loading';

const Address: React.FC<Profile> = ({ profile }) => {
  const {
    address: {
      number, street, country, zip, city,
    },
  } = profile;

  const streetText = `${number} ${street}`;
  const countryText = `${country}, ${zip} ${city}`;

  return (
    <section className="address">
      <article className="address-street">
        <ContentLoading text={streetText} />
      </article>
      <article className="address-country">
        <ContentLoading text={countryText} />
      </article>
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Address);
