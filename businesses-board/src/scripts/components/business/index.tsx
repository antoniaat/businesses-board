import useBusiness from '../../hooks/use-business';
import BusinessTable from './business-table';

const Business = () => {
  const { isLoading, data: business } = useBusiness();

  return (
    <section className="businesses">
      <BusinessTable business={business} />
    </section>
  );
};

export default Business;
