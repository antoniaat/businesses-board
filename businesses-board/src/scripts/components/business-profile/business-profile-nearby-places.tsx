import '../../../styles/components/business-profile/business-profile-nearby-places.scss';

import BusinessProfileNearbyPlacesList from './business-profile-nearby-places-list';

const BusinessProfileNearbyPlaces = () => (
  <section className="business-profile-nearby-places">
    <h4 className="business-profile-nearby-places-title">
      Nearby Places
    </h4>
    <BusinessProfileNearbyPlacesList />
  </section>
);

export default BusinessProfileNearbyPlaces;
