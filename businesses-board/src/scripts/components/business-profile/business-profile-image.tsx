import '../../../styles/components/business-profile/business-profile-image.scss';

import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';
import { Business } from '../../types/business';

interface Props {
  profile: Business
}

const BusinessProfileImage: React.FC<Props> = ({ profile: { image, name } }) => (
  <section className='business-profile-image'>
    <img src={image} alt={name} />
  </section>
);

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(BusinessProfileImage);
