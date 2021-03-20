import './styles/base/styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BusinessProfile from './scripts/components/business-profile';
import Business from './scripts/components/business';
import Navigation from './scripts/components/navigation';

const App = () => (
  <>
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/" component={Business} />
        <Route path="/business/:id" component={BusinessProfile} />
      </Switch>
    </Router>
  </>
);

export default App;
