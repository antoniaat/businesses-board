import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useBusiness from '../../hooks/use-business';
import { setIsLoading } from '../../redux/creators';
import BusinessTable from './business-table';

interface BusinessProps {
  isLoading: boolean,
  handleIsLoadingChange: Function,
}

const Business: React.FC<BusinessProps> = ({
  isLoading: isLoadingState,
  handleIsLoadingChange,
}) => {
  const { isLoading, data: business } = useBusiness();

  useEffect(() => {
    handleIsLoadingChange(isLoading);
  }, [isLoading]);

  console.log(isLoadingState, 'isLoadingState');

  return (
    <section className="businesses">
      <BusinessTable business={business} />
    </section>
  );
};

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: any) => ({
  handleIsLoadingChange(value: boolean) {
    dispatch(setIsLoading(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Business);
