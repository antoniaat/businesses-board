import ContentLoading from '../content-loading';
import BusinessProfileNearbyPlacesList from './business-profile-nearby-places-list';

const BusinessProfileNearbyPlaces = () => (
  <section className="business-profile-nearby-places">
    <h4 className="business-profile-nearby-places-title">
      <ContentLoading text="Nearby Places" />
    </h4>
    <BusinessProfileNearbyPlacesList />
  </section>
);

export default BusinessProfileNearbyPlaces;
