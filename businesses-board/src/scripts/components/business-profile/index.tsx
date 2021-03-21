import '../../../styles/components/business-profile/business-profile.scss';

import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect, useDispatch } from 'react-redux';

import { Business } from '../../types/business';
import { StoreState } from '../../redux/reducers';
import { setProfile } from '../../redux/actions';
import { getById } from '../../utils/utils';

import NearbyPlaces from './nearby-places';
import BusinessProfileImage from './business-profile-image';
import Address from './business-profile-address';
import Contact from './contact';

interface Props { isLoading: boolean, data: Business[] }

const BusinessProfile: React.FC<Props> = ({ isLoading, data }) => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const { id } = params;

  useEffect(() => {
    if (!isLoading) {
      const profile = getById(id, data);
      dispatch(setProfile({ payload: profile }));
    }
  }, [isLoading]);

  return (
    <section className="business-profile">
      <BusinessProfileImage />
      <Address />
      <Contact />
      <NearbyPlaces />
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  isLoading: state.isLoading,
  data: state.data,
});

export default connect(mapStateToProps)(BusinessProfile);
