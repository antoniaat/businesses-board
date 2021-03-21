import '../../../styles/components/business-profile/business-profile-image.scss';

import React from 'react';

import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';
import { Profile } from '../../types/business-profile';

const BusinessProfileImage: React.FC<Profile> = ({ profile: { image, name } }) => (
  <section className="business-profile-image">
    <img src={image} alt={name} />
  </section>
);

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(BusinessProfileImage);
