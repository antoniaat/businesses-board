import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useBusiness from '../../hooks/use-business';
import { setData, setIsLoading } from '../../redux/creators';
import { Business as BusinessType } from '../../types/business';
import BusinessTable from './business-table';

interface BusinessProps {
  isLoading: boolean,
  data: BusinessType[],
  handleIsLoadingChange: Function,
  handleDataChange: Function,
}

const Business: React.FC<BusinessProps> = ({
  isLoading: isLoadingState,
  data: dataState,
  handleIsLoadingChange,
  handleDataChange,
}) => {
  const { isLoading, data: business } = useBusiness();

  useEffect(() => {
    handleIsLoadingChange(isLoading);
    handleDataChange(business);
  }, [isLoading]);

  console.log(isLoadingState, 'isLoadingState');
  console.log(dataState, 'dataState');

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
  handleDataChange(value: BusinessType[]) {
    dispatch(setData(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Business);
