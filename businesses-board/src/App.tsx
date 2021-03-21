import './styles/base/styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import BusinessProfile from './scripts/components/business-profile';
import Business from './scripts/components/business';
import Navigation from './scripts/components/navigation';
import store from './scripts/redux/store';

const App = () => (
  <Provider store={store}>
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/" component={Business} />
        <Route path="/business/:id" component={BusinessProfile} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
