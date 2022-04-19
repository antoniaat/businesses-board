import '../../../styles/components/business-profile/business-profile-nearby-places-list.scss';

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
        nearbyPlaces.map(({ id: placeId, name, description }) => (
          <li
            key={placeId}
            className="business-profile-nearby-places-list-item"
          >
            <article className="business-profile-nearby-places-list-item-name">
              {name}
            </article>
            <article className="business-profile-nearby-places-list-item-description">
              {description}
            </article>
          </li>
        ))
      }
    </ul>
  );
};

const mapStateToProps = (state: StoreState) => (state);

export default connect(mapStateToProps)(BusinessProfileNearbyPlacesList);
