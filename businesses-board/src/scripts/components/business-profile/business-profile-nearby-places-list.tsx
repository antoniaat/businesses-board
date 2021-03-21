import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';
import { getNearbyPlaces } from '../../utils/utils';

import ContentLoading from '../content-loading';

const BusinessProfileNearbyPlacesList: React.FC<StoreState> = (
  {
    data,
    profile: { id, address },
  },
) => {
  const { country } = address;
  const nearbyPlaces = getNearbyPlaces(id, country, data);

  return (
    <ul className="business-profile-nearby-places-list">
      {
        nearbyPlaces.map(({ id: placeId, name }) => (
          <li
            key={placeId}
            className="business-profile-nearby-places-listm"
          >
            <ContentLoading text={name} />
          </li>
        ))
      }
    </ul>
  );
};

const mapStateToProps = (state: StoreState) => (state);

export default connect(mapStateToProps)(BusinessProfileNearbyPlacesList);
