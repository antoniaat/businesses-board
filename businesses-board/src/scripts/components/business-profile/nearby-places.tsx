import React from 'react';
import { connect } from 'react-redux';
import ContentLoading from '../content-loading';
import NearbyPlacesList from './nearby-places-list';

interface Props {
  isLoading: boolean,
}

const NearbyPlaces: React.FC<Props> = ({ isLoading }) => (
  <section className="nearby-places">
    <h4 className="nearby-places-title">
      <ContentLoading text="Nearby Places" isLoading={isLoading} />
    </h4>
    <NearbyPlacesList />
  </section>
);

const mapStateToProps = (state: { isLoading: boolean }) => state;

export default connect(mapStateToProps)(NearbyPlaces);
