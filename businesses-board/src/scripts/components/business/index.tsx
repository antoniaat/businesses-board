import useBusiness from '../../hooks/use-business';
import BusinessTable from './business-table';

const Businesses = () => {
  const { isLoading, data: business } = useBusiness();

  return (
    <section className="businesses">
      <BusinessTable business={business} />
    </section>
  );
};

export default Businesses;
