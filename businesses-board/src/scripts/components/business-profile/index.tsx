import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect, useDispatch } from 'react-redux';
import NearbyPlaces from './nearby-places';
import Address from './address';
import Contact from './contact';
import HeaderImage from './header-image';
import { getById } from '../../utils/utils';
import { Business } from '../../types/business';
import { StoreState } from '../../redux/reducers';
import { setProfile } from '../../redux/actions';

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
      <HeaderImage />
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
