import '../../../styles/components/business-profile/business-profile.scss';

import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect, useDispatch } from 'react-redux';

import { Business } from '../../types/business';
import { StoreState } from '../../redux/reducers';
import { setProfile } from '../../redux/actions';
import { getById } from '../../utils/utils';

import BusinessProfileNearbyPlaces from './business-profile-nearby-places';
import BusinessProfileImage from './business-profile-image';
import BusinessProfileAddress from './business-profile-address';
import BusinessProfileContact from './business-profile-contact';

interface Props { data: Business[] }

const BusinessProfile: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const { id } = params;

  useEffect(() => {
    const profile = getById(id, data);
    dispatch(setProfile({ payload: profile }));
  }, []);

  return (
    <main className="business-profile">
      <BusinessProfileImage />
      <section className="business-profile-content">
        <BusinessProfileAddress />
        <BusinessProfileNearbyPlaces />
        <BusinessProfileContact />
      </section>
    </main>
  );
};

const mapStateToProps = (state: StoreState) => ({
  data: state.data,
});

export default connect(mapStateToProps)(BusinessProfile);
