import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useBusiness from '../../hooks/use-business';
import { setData, setIsLoading } from '../../redux/creators';
import { Business as BusinessType } from '../../types/business';
import BusinessTable from './business-table';

interface BusinessProps {
  handleIsLoadingChange: Function,
  handleDataChange: Function,
}

const Business: React.FC<BusinessProps> = ({
  handleIsLoadingChange,
  handleDataChange,
}) => {
  const { isLoading, data: business } = useBusiness();

  useEffect(() => {
    handleIsLoadingChange(isLoading);
    handleDataChange(business);
  }, [isLoading]);

  return (
    <section className="businesses">
      <BusinessTable />
    </section>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  handleIsLoadingChange(value: boolean) {
    dispatch(setIsLoading(value));
  },

  handleDataChange(value: BusinessType[]) {
    dispatch(setData(value));
  },
});

export default connect(null, mapDispatchToProps)(Business);
