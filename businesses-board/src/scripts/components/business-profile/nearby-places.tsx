import React from 'react';
import { Business } from '../../types/business';

interface Props {
  places: Business[]
}

const NearbyPlaces: React.FC<Props> = ({ places }) => (
  <section className="nearby-places">
    <ul>
      {
        places.map((place) => (
          <li key={place.id}>
            {place.name}
          </li>
        ))
      }
    </ul>

  </section>
);

export default NearbyPlaces;
