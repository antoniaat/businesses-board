import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';
import { Profile } from '../../types/business-profile';

const Address: React.FC<Profile> = ({ profile }) => {
  const {
    address: {
      number, street, country, zip, city,
    },
  } = profile;

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

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Address);
