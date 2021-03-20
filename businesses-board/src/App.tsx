import './styles/base/styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Business from './scripts/components/business';
import Board from './scripts/components/board';
import Navigation from './scripts/components/navigation';

const App = () => (
  <>
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/" component={Board} />
        <Route path="/businesses/:id" component={Business} />
      </Switch>
    </Router>
  </>
);

export default App;
