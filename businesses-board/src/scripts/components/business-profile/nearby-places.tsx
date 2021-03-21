import ContentLoading from '../content-loading';
import NearbyPlacesList from './nearby-places-list';

const NearbyPlaces = () => (
  <section className="nearby-places">
    <h4 className="nearby-places-title">
      <ContentLoading text="Nearby Places" />
    </h4>
    <NearbyPlacesList />
  </section>
);

export default NearbyPlaces;
