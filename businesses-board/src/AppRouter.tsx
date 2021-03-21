import './styles/base/styles.scss';

import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import BusinessProfile from './scripts/components/business-profile';
import Business from './scripts/components/business-table';
import { Business as BusinessType } from './scripts/types/business';
import { setData, setIsLoading } from './scripts/redux/creators';
import useBusiness from './scripts/hooks/use-business';

interface Props {
  handleIsLoadingChange: Function,
  handleDataChange: Function,
}

const AppRouter: React.FC<Props> = ({ handleIsLoadingChange, handleDataChange }) => {
  const { isLoading, data: business } = useBusiness();

  useEffect(() => {
    handleIsLoadingChange(isLoading);
    handleDataChange(business);
  }, [isLoading]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Business} />
        <Route path="/business/:id" component={BusinessProfile} />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  handleIsLoadingChange(isLoading: boolean) {
    dispatch(setIsLoading(isLoading));
  },

  handleDataChange(data: BusinessType[]) {
    dispatch(setData(data));
  },
});

export default connect(null, mapDispatchToProps)(AppRouter);
