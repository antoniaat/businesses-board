import './styles/base/styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Profile from './scripts/components/business-profile';
import BusinessProfile from './scripts/components/business';
import Navigation from './scripts/components/navigation';

const App = () => (
  <>
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/" component={BusinessProfile} />
        <Route path="/business/:id" component={Profile} />
      </Switch>
    </Router>
  </>
);

export default App;
