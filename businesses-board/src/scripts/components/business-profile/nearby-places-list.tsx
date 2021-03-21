import React from 'react';
import { connect } from 'react-redux';
import { Business } from '../../types/business';
import { getNearbyPlaces } from '../../utils/utils';
import ContentLoading from '../content-loading';

interface Props {
  data?: Business[],
  profile?: Business,
  isLoading?: boolean,
}

const NearbyPlacesList: React.FC<Props> = ({
  isLoading = true, data = [], profile = {},
}) => {
  const { id, address } = profile;
  console.log(profile, 'profofo');
  // const { country } = address;

  const nearbyPlaces = getNearbyPlaces('6758601439', 'United Kingdom', data);

  return (
    <ul className="nearby-places-list">
      {
        nearbyPlaces.map(({ id: placeId, name }) => (
          <li
            key={placeId}
            className="nearby-places-list-item"
          >
            <ContentLoading text={name} isLoading={isLoading} />
          </li>
        ))
      }
    </ul>
  );
};

const mapStateToProps = (state: {
  isLoading: boolean,
  data: Business[],
  profile: Business
}) => state;

export default connect(mapStateToProps)(NearbyPlacesList);
