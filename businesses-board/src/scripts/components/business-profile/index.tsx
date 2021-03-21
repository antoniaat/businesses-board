import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import NearbyPlaces from './nearby-places';
import Address from './address';
import Contact from './contact';
import HeaderImage from './header-image';
import { getById } from '../../utils/utils';
import { Business } from '../../types/business';
import { setProfile } from '../../redux/creators';

interface Props {
  isLoading?: boolean,
  data?: Business[],
  handleProfileChange: Function,
}

const BusinessProfile: React.FC<Props> = (
  {
    isLoading = true,
    data = [],
    handleProfileChange = (profile: Business) => profile,
  },
) => {
  const params: { id: string } = useParams();
  const { id } = params;

  console.log(isLoading, ' isLoading update');

  useEffect(() => {
    if (!isLoading) {
      const profile = getById(id, data);
      handleProfileChange(profile);
    }
  }, [isLoading]);

  return (
    <section className="business-profile">
      <HeaderImage />
      <Address />
      <Contact />
      <NearbyPlaces />
    </section>
  );
};

const mapStateToProps = (state: Object) => state;

const mapDispatchToProps = (dispatch: Function) => ({
  handleProfileChange(profile: Business) {
    dispatch(setProfile(profile));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfile);
