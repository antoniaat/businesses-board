import './styles/base/styles.scss';

import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BusinessProfile from './scripts/components/business-profile';
import BusinessTable from './scripts/components/business-table';
import useBusiness from './scripts/hooks/use-business';
import { setData, setIsLoading } from './scripts/redux/actions';
import Navigation from './scripts/components/navigation';

const AppRouter = () => {
  const { isLoading, data } = useBusiness();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading({ payload: isLoading }));
    dispatch(setData({ payload: data }));
  }, [isLoading]);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={BusinessTable} />
        <Route path="/business/:id" component={BusinessProfile} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
