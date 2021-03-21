import '../../../styles/components/business-profile/business-profile-image.scss';

import React from 'react';
import { connect } from 'react-redux';

import loading from '../../../assets/icons/loading.svg';

import { StoreState } from '../../redux/reducers';
import { Business } from '../../types/business';
import { getClassName } from '../../utils/utils';

interface Props {
  isLoading: boolean,
  profile: Business
}

const BusinessProfileImage: React.FC<Props> = ({ isLoading, profile: { image, name } }) => {
  const combinedClassName = getClassName({
    'business-profile-image': true,
    'business-profile-image-loading': isLoading,
  });

  const imageSrc = isLoading
    ? loading
    : image;

  return (
    <section className={combinedClassName}>
      <img src={imageSrc} alt={name} />
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  isLoading: state.isLoading,
  profile: state.profile,
});

export default connect(mapStateToProps)(BusinessProfileImage);
